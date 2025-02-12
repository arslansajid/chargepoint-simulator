  // Example output data
  export const chargingDataPerDay = [
    { time: "00:00", power: 50 },
    { time: "06:00", power: 80 },
    { time: "12:00", power: 120 },
    { time: "18:00", power: 90 },
    { time: "23:59", power: 60 },
  ];

  export const chargingDataPerWeek = [
    // 2023-02-10 (Day 1)
    { date: "2023-02-10", time: "00:00", power: 50 },
    { date: "2023-02-10", time: "06:00", power: 80 },
    { date: "2023-02-10", time: "12:00", power: 120 },
    { date: "2023-02-10", time: "18:00", power: 90 },
    { date: "2023-02-10", time: "23:59", power: 60 },
  
    // 2023-02-11 (Day 2)
    { date: "2023-02-11", time: "00:00", power: 50 },
    { date: "2023-02-11", time: "06:00", power: 80 },
    { date: "2023-02-11", time: "12:00", power: 120 },
    { date: "2023-02-11", time: "18:00", power: 90 },
    { date: "2023-02-11", time: "23:59", power: 60 },
  
    // 2023-02-12 (Day 3)
    { date: "2023-02-12", time: "00:00", power: 50 },
    { date: "2023-02-12", time: "06:00", power: 80 },
    { date: "2023-02-12", time: "12:00", power: 120 },
    { date: "2023-02-12", time: "18:00", power: 90 },
    { date: "2023-02-12", time: "23:59", power: 60 },
  
    // 2023-02-13 (Day 4)
    { date: "2023-02-13", time: "00:00", power: 50 },
    { date: "2023-02-13", time: "06:00", power: 80 },
    { date: "2023-02-13", time: "12:00", power: 120 },
    { date: "2023-02-13", time: "18:00", power: 90 },
    { date: "2023-02-13", time: "23:59", power: 60 },
  
    // 2023-02-14 (Day 5)
    { date: "2023-02-14", time: "00:00", power: 50 },
    { date: "2023-02-14", time: "06:00", power: 80 },
    { date: "2023-02-14", time: "12:00", power: 120 },
    { date: "2023-02-14", time: "18:00", power: 90 },
    { date: "2023-02-14", time: "23:59", power: 60 },
  
    // 2023-02-15 (Day 6)
    { date: "2023-02-15", time: "00:00", power: 50 },
    { date: "2023-02-15", time: "06:00", power: 80 },
    { date: "2023-02-15", time: "12:00", power: 120 },
    { date: "2023-02-15", time: "18:00", power: 90 },
    { date: "2023-02-15", time: "23:59", power: 60 },
  
    // 2023-02-16 (Day 7)
    { date: "2023-02-16", time: "00:00", power: 50 },
    { date: "2023-02-16", time: "06:00", power: 80 },
    { date: "2023-02-16", time: "12:00", power: 120 },
    { date: "2023-02-16", time: "18:00", power: 90 },
    { date: "2023-02-16", time: "23:59", power: 60 }
  ];
  
  export const chargingDataPerMonth = [
    // 2023-02-01 to 2023-02-30 (30 Days)
    { date: "2023-02-01", time: "00:00", power: 50 },
    { date: "2023-02-01", time: "06:00", power: 80 },
    { date: "2023-02-01", time: "12:00", power: 120 },
    { date: "2023-02-01", time: "18:00", power: 90 },
    { date: "2023-02-01", time: "23:59", power: 60 },
  
    { date: "2023-02-02", time: "00:00", power: 50 },
    { date: "2023-02-02", time: "06:00", power: 80 },
    { date: "2023-02-02", time: "12:00", power: 120 },
    { date: "2023-02-02", time: "18:00", power: 90 },
    { date: "2023-02-02", time: "23:59", power: 60 },
  
    // Repeat for all days up to 2023-02-30...
    
    { date: "2023-02-30", time: "00:00", power: 50 },
    { date: "2023-02-30", time: "06:00", power: 80 },
    { date: "2023-02-30", time: "12:00", power: 120 },
    { date: "2023-02-30", time: "18:00", power: 90 },
    { date: "2023-02-30", time: "23:59", power: 60 }
  ];
  
  export const chargingDataPerYear = [
    { date: "2023-01-01", time: "00:00", power: 50 },
    { date: "2023-02-01", time: "06:00", power: 80 },
    { date: "2023-03-01", time: "12:00", power: 120 },
    { date: "2023-04-01", time: "18:00", power: 90 },
    { date: "2023-05-01", time: "23:59", power: 60 },
    { date: "2023-06-01", time: "06:00", power: 80 },
    { date: "2023-07-01", time: "12:00", power: 120 },
    { date: "2023-08-01", time: "18:00", power: 90 },
    { date: "2023-09-01", time: "23:59", power: 40 },
    { date: "2023-10-01", time: "23:59", power: 110 },
    { date: "2023-11-01", time: "23:59", power: 90 },
    { date: "2023-12-01", time: "23:59", power: 160 },
  ];
  
  export const chargersData = [
    { name: "Available", value: 200 },
    { name: "Unavailable", value: 300 },
  ]

  export const energyConsumedData = [
    { name: "Jan", value: 4000, pv: 2400 },
    { name: "Feb", value: 3000, pv: 1398 },
    { name: "Mar", value: 2000, pv: 9800 },
    { name: "Apr", value: 2780, pv: 3908 },
    { name: "May", value: 1890, pv: 4800 },
    { name: "Jun", value: 2390, pv: 3800 },
    { name: "Jul", value: 3490, pv: 4300 },
  ];

  export const chargingSessionsData = [
    { name: "00:00", value: 50 },
    { name: "03:00", value: 20 },
    { name: "06:00", value: 80 },
    { name: "09:00", value: 90 },
    { name: "12:00", value: 120 },
    { name: "12:00", value: 100 },
    { name: "18:00", value: 90 },
    { name: "23:59", value: 60 },
  ];