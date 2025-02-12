interface ChargingNeedsProbability {
  range: [number, number];
  probability: number;
}

export interface SimulationResults {
  totalEnergyConsumed: number;
  theoreticalMaxDemand: number;
  actualMaxDemand: number;
  concurrencyFactor: number;
}

type HourlyProbability = {
  [hour: number]: number;
};

const NUM_CHARGEPOINTS: number = 20;
const CHARGING_POWER: number = 11; // kW
const TOTAL_DAYS: number = 365;
const INTERVALS_PER_DAY: number = 96; // 15-minute intervals
const KWH_PER_100KM: number = 18;

// Adjusted Probability Distributions
const arrivalProbabilityByHour: HourlyProbability = {
  0: 0.05, 1: 0.03, 2: 0.03, 3: 0.03, 4: 0.05, 5: 0.07,
  6: 0.12, 7: 0.15, 8: 0.18, 9: 0.16, 10: 0.12, 11: 0.12,
  12: 0.13, 13: 0.12, 14: 0.12, 15: 0.13, 16: 0.15, 17: 0.18,
  18: 0.15, 19: 0.12, 20: 0.10, 21: 0.08, 22: 0.06, 23: 0.05
};

const chargingNeedsProbability: ChargingNeedsProbability[] = [
  { range: [0, 20], probability: 0.12 },
  { range: [21, 40], probability: 0.28 },
  { range: [41, 60], probability: 0.4 },
  { range: [61, 80], probability: 0.2 },
];

class Chargepoint {
  private id: number;
  private occupied: boolean;
  private remainingChargingTime: number;

  constructor(id: number) {
    this.id = id;
    this.occupied = false;
    this.remainingChargingTime = 0;
  }

  public startCharging(chargingTime: number): void {
    this.occupied = true;
    this.remainingChargingTime = chargingTime;
  }

  public update(): number {
    if (this.occupied) {
      this.remainingChargingTime--;
      if (this.remainingChargingTime <= 0) {
        this.occupied = false;
      }
    }
    return this.occupied ? CHARGING_POWER : 0;
  }

  public isOccupied(): boolean {
    return this.occupied;
  }
}

function getRandomChargingNeeds(): number {
  const rand: number = Math.random();
  let cumulative: number = 0;

  for (const need of chargingNeedsProbability) {
    cumulative += need.probability;
    if (rand <= cumulative) {
      return Math.floor(
        Math.random() * (need.range[1] - need.range[0] + 1) + need.range[0]
      );
    }
  }
  return chargingNeedsProbability[0].range[0];
}

function shouldEVArrive(hour: number): boolean {
  if (hour < 0 || hour > 23) {
    throw new Error("Invalid hour value");
  }
  return Math.random() < arrivalProbabilityByHour[hour] / 2.8; // Adjusted probability factor
}

function calculateChargingTime(distance: number): number {
  const energyNeeded: number = (distance * KWH_PER_100KM) / 100;
  return Math.ceil((energyNeeded / CHARGING_POWER) * 4.5); // Slightly increased duration
}

export function runSimulation(): SimulationResults {
  const chargepoints: Chargepoint[] = Array.from(
    { length: NUM_CHARGEPOINTS },
    (_, i) => new Chargepoint(i)
  );

  let totalEnergyConsumed: number = 0;
  let maxPowerDemand: number = 0;

  for (let day = 0; day < TOTAL_DAYS; day++) {
    for (let interval = 0; interval < INTERVALS_PER_DAY; interval++) {
      const hour: number = Math.floor(interval / 4);
      let currentPowerDemand: number = 0;

      for (const chargepoint of chargepoints) {
        const power: number = chargepoint.update();
        currentPowerDemand += power;
        totalEnergyConsumed += power / 4;
      }

      if (shouldEVArrive(hour)) {
        const availableChargepoints = chargepoints.filter(
          (cp) => !cp.isOccupied()
        );
        for (let i = 0; i < Math.min(3, availableChargepoints.length); i++) {
          const distance: number = getRandomChargingNeeds();
          const chargingTime: number = calculateChargingTime(distance);
          availableChargepoints[i].startCharging(chargingTime);
        }
      }

      maxPowerDemand = Math.max(maxPowerDemand, currentPowerDemand);
    }
  }

  const theoreticalMaxDemand: number = NUM_CHARGEPOINTS * CHARGING_POWER;
  const concurrencyFactor: number =
    (maxPowerDemand / theoreticalMaxDemand) * 100;

  return {
    totalEnergyConsumed: Math.round(totalEnergyConsumed),
    theoreticalMaxDemand,
    actualMaxDemand: maxPowerDemand,
    concurrencyFactor,
  };
}

try {
  const results: SimulationResults = runSimulation();
  console.log(`Total Energy Consumed: ${results.totalEnergyConsumed} kWh`);
  console.log(
    `Theoretical Maximum Power Demand: ${results.theoreticalMaxDemand} kW`
  );
  console.log(`Actual Maximum Power Demand: ${results.actualMaxDemand} kW`);
  console.log(`Concurrency Factor: ${results.concurrencyFactor.toFixed(2)}%`);
} catch (error) {
  console.error("Error during simulation:", error);
}
