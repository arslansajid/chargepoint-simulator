# EV Charging Simulation & Visualization

## 🚀 Test environment URL
https://chargepoint-simulator-sand.vercel.app/

##  💻 Overview
This project simulates the energy demand of EV charging stations and provides a frontend interface to visualize key parameters and results.
The goal is to estimate the actual power consumption of EV charging points over a year using a statistical simulation. The results are then displayed using an interactive frontend.

## 🏗 Tech Stack
- **Frontend:** React, TypeScript, Tailwind CSS
- **State Management:** Context API
- **Testing:** Jest, React Testing Library
- **Deployment:** Vercel
## 📦 Installation

1. Clone the repository:
   ```sh
   git clone https://github.com/arslansajid/chargepoint-simulator.git
   cd your-project
   ```
2. Install dependencies:
   ```sh
   npm install  # or yarn install
   ```
3. Start the development server:
   ```sh
   npm run dev  # or yarn dev
   ```
4. Open your browser and navigate to `http://localhost:3000`.


## 🧪 Running Tests
To run unit tests:
```sh
npm test  # or yarn test
```

## 📜 Folder Structure
```
/src
  ├── Task1/             # Task 1 - simulation
  ├── Task2/             # Frontend - visualization
  ├── components/        # Reusable UI components
  ├── constants/         # Constants for colors etc
  ├── hooks/             # Custom hooks
  ├── context/           # Context API providers
  ├── services/          # API calls and external services
  ├── App.tsx            # Root component
```

## 🚀 Deployment
To build for production:
```sh
npm run build
```
To deploy (if using Vercel):
```sh
vercel deploy
```

## 📌 Contributing
1. Fork the repository
2. Create a new feature branch: `git checkout -b feature-name`
3. Commit your changes: `git commit -m "Add new feature"`
4. Push to the branch: `git push origin feature-name`
5. Open a pull request

## 📜 License
This project is licensed under the **MIT License**.

---

Made with ❤️ by [Arslan Sajid](https://github.com/arslansajid)