const NUM_CHARGEPOINTS = 20;
const CHARGER_POWER_KW = 11;
const INTERVALS_PER_DAY = 96; // 15-minute intervals in a day
const DAYS_PER_YEAR = 365;
const TOTAL_INTERVALS = INTERVALS_PER_DAY * DAYS_PER_YEAR;

export function simulateChargePoints() {
  // Further increased EV arrival probability to balance concurrency
  const EV_ARRIVAL_PROB = Array(INTERVALS_PER_DAY).fill(0.025); // Adjusted for higher utilization

  // Adjusted probability distribution of charging needs in kWh to allow for more charging activity
  const CHARGING_NEEDS_PROB = [
    { range: [6, 10], probability: 0.2 },
    { range: [10, 16], probability: 0.5 },
    { range: [16, 22], probability: 0.3 },
  ];

  // Helper function to get random charging need
  function getRandomChargingNeed() {
    const rand = Math.random();
    let cumulativeProb = 0;
    for (const { range, probability } of CHARGING_NEEDS_PROB) {
      cumulativeProb += probability;
      if (rand <= cumulativeProb) {
        return range[0] + Math.random() * (range[1] - range[0]);
      }
    }
    return 12; // Fallback value
  }

  // Simulation variables
  let totalEnergyConsumed = 0;
  let maxPowerDemand = 0;
  let chargepoints = Array(NUM_CHARGEPOINTS).fill(null); // Tracks when each chargepoint is free

  // Run simulation
  for (let t = 0; t < TOTAL_INTERVALS; t++) {
    let currentPowerDemand = 0;

    // Free up chargepoints that finished charging
    for (let i = 0; i < NUM_CHARGEPOINTS; i++) {
      if (chargepoints[i] !== null && chargepoints[i] <= t) {
        chargepoints[i] = null;
      }
    }

    // Check for EV arrivals
    const prob = EV_ARRIVAL_PROB[t % INTERVALS_PER_DAY];
    for (let i = 0; i < NUM_CHARGEPOINTS; i++) {
      if (chargepoints[i] === null && Math.random() < prob) {
        const chargingNeed = getRandomChargingNeed();
        const chargingTime = (chargingNeed / CHARGER_POWER_KW) * 4; // Convert kWh to 15-min intervals
        chargepoints[i] = t + Math.ceil(chargingTime);
        totalEnergyConsumed += chargingNeed;
        currentPowerDemand += CHARGER_POWER_KW;
      }
    }

    // Track max power demand
    if (currentPowerDemand > maxPowerDemand) {
      maxPowerDemand = currentPowerDemand;
    }
  }

  // Calculate theoretical max power demand
  const theoreticalMaxPower = NUM_CHARGEPOINTS * CHARGER_POWER_KW;

  // Calculate concurrency factor
  const concurrencyFactor = maxPowerDemand / theoreticalMaxPower;

  console.log(`Total energy consumed: ${totalEnergyConsumed.toFixed(2)} kWh`);
  console.log(`Theoretical max power demand: ${theoreticalMaxPower} kW`);
  console.log(`Actual max power demand: ${maxPowerDemand} kW`);
  console.log(`Concurrency factor: ${(concurrencyFactor * 100).toFixed(2)}%`);
}
