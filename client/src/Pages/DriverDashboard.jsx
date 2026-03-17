import React from "react";
import Topbar from "../Components/Driver/Topbar";
import RouteMap from "../Components/Driver/RouteMap";
import { useState } from "react";
import { useEffect } from "react";
import DriverLayout from "../Components/Driver/DriverLayout";
import VehicleTelemetry from "../Components/Driver/VehicleTelemetry";
import SustainabilityPanel from "../Components/Driver/Sustainablity";

const DriverDashboard = () => {
  const [routeProgress, setRouteProgress] = useState(0);
  const [eta, setEta] = useState(40);

  useEffect(() => {
    const timer = setInterval(() => {
      setRouteProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          return 100;
        }
        return prev + 0.5;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const totalTripTime = 75;
    const remainingTime = totalTripTime - totalTripTime * (routeProgress / 100);
    setEta(Math.max(0, Math.ceil(remainingTime)));
  }, [routeProgress]);
  return (
   
    <DriverLayout>
      <RouteMap eta={eta} routeProgress={routeProgress} />
      <VehicleTelemetry/>
      <SustainabilityPanel/>
    </DriverLayout>
    
  );
};

export default DriverDashboard;
