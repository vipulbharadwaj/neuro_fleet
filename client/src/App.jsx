import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./Components/Login";
import Home from "./Pages/Home";
import { ThemeProvider } from "./context/ThemeContext";
import FleetInventoryPage from "./Pages/FleetInventoryPage";
import AdminDashboard from "./Pages/AdminDashboard";
import AdminLayout from "./Components/AdminLayout";
import Dashboard from "./Pages/Dashboard";
import Maintenance from "./Pages/Maintenance";
import UserDashboard from "./Pages/UserDashboard";
import LiveTrip from "./Components/LiveTrIP.JSX";
import DriverDashboard from "./Pages/DriverDashboard";
import UserTrip from "./Components/UserTrip";

const mockFleet = [
  { id: 'V-1042', model: 'TATA Nexon EV', type: 'EV', rating :"4.2", status: 'In Use', location: 'Connaught Place, Delhi', fare: 12, energyLevel: 78, speed: 45, mileage: 12.4, health: 95 },
  { id: 'V-1043', model: 'TATA Nexon EV', type: 'EV', rating :"4.5", status: 'Available', location: 'Cyber City, Gurugram', energyLevel: 100, speed: 0, mileage: 8.1, health: 99 },
  { id: 'V-1044', model: 'Mahindra XUV400', type: 'EV', rating :"4.0", status: 'Needs Service', location: 'Okhla Phase 2, Delhi', energyLevel: 15, speed: 0, mileage: 42.6, health: 48 },
  { id: 'V-2011', model: 'Maruti Dzire', type: 'ICE', rating :"4.3", status: 'In Use', location: 'Sector 18, Noida', fare: 15, energyLevel: 45, speed: 62, mileage: 55.3, health: 88 },
  { id: 'V-1045', model: 'TATA Nexon EV', type: 'EV', rating :"4.6", status: 'Available', location: 'Indira Gandhi Airport', energyLevel: 88, speed: 0, mileage: 5.2, health: 97 },
  { id: 'V-2012', model: 'Maruti Dzire', type: 'ICE', rating :"4.1", status: 'Available', location: 'Vasant Kunj, Delhi', fare: 15, energyLevel: 60, speed: 0, mileage: 28.9, health: 82 },
  { id: 'V-1046', model: 'TATA Punch EV', type: 'EV', rating :"4.4", status: 'In Use', location: 'Hauz Khas, Delhi', energyLevel: 32, speed: 38, fare: 13, mileage: 19.7, health: 91 },
  { id: 'V-2013', model: 'Hyundai Aura', type: 'ICE', rating :"3.9", status: 'Needs Service', location: 'Sector 62, Noida', energyLevel: 8, speed: 0, mileage: 89.4, health: 35 },
  { id: 'V-1048', model: 'TATA SUV', type: 'ICE', rating :"4.2", status: 'In Use', location: 'Cyber City, Gurugram', energyLevel: 65, speed: 42, fare: 15, mileage: 34.2, health: 92 }
];
const App = () => {
  const [fleet, setFleet] = React.useState(mockFleet);
  return (
    
    <>
    <ThemeProvider>
    
     
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />

        <Route path="/admin" >
            <Route path="dashboard" element={<AdminDashboard />} />
            <Route path="fleet" element={<FleetInventoryPage />} />
              <Route path="health" element={<Maintenance />} />
          </Route>

          <Route path="/user" >
            <Route path="dashboard" element={<UserDashboard fleet={fleet} setFleet={setFleet} />} />
            <Route path="booktrip" element={<UserTrip/>} />
             <Route path="live/:id" element={<LiveTrip/>} />
              <Route path="mytrip" element={<UserDashboard/>} />
          </Route>

         <Route path="*" element={<div className="flex items-center justify-center h-screen"><h1 className="text-3xl font-bold text-zinc-900 dark:text-white">404 - Page Not Found</h1></div>} />
         <Route path="/driver/dashboard" element={<DriverDashboard/>} />
      </Routes>
      
      </ThemeProvider>
    </>
  );
};

export default App;
