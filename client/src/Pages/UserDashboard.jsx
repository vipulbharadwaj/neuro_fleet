import React from 'react';
import UserLayout from '../Components/UserLayout';
import BookingCard from '../Components/BookingCard';
import LiveTrip from '../Components/LiveTrip';
import { CarFrontIcon, Zap } from 'lucide-react';




const UserDashboardPage = ({ fleet, setFleet }) => {
  const activeVehicle = fleet.find(v => v.status === 'In Use');

  const handleEndTrip = (finalBattery) => {
    const updatedFleet = fleet.map(v => 
      v.id === activeVehicle.id 
      ? { ...v, status: 'Available', energyLevel: Math.floor(finalBattery), mileage: v.mileage + 5 } 
      : v
    );
    setFleet(updatedFleet);
  };

  const suggestedCars = fleet
    .filter(v => v.status === 'Available' && v.health > 85)
    .sort((a, b) => b.energyLevel - a.energyLevel)
    .slice(0, 3);

  const handleBooking = (vehicle) => {
    const updatedFleet = fleet.map(v => 
      v.id === vehicle.id ? { ...v, status: 'In Use' } : v
    );
    setFleet(updatedFleet);
  };

  return (
     
    <UserLayout>
      <div className="mx-auto space-y-10 animate-in fade-in duration-700">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <h1 className="text-2xl font-black text-zinc-900 dark:text-white tracking-tighter">
              {activeVehicle ? "Live Tracking" : "Explore Fleet"}
            </h1>
            <p className="text-zinc-500 dark:text-zinc-400 font-medium flex items-center gap-2 mt-1">
              {activeVehicle ? (
                <><span className="relative flex h-2 w-2"><span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span><span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span></span> Tracking Live</>
              ) : (
                "AI-powered recommendations for your next journey."
              )}
            </p>
          </div>
          
          {!activeVehicle && (
            <div className="hidden md:flex items-center gap-3 bg-zinc-100 dark:bg-zinc-900 p-1.5 rounded-2xl border border-zinc-200 dark:border-zinc-800">
              <button className="px-4 py-2 bg-white dark:bg-zinc-800 shadow-sm rounded-xl text-xs font-bold text-zinc-900 dark:text-white">All</button>
              <button className="px-4 py-2 text-xs font-bold text-zinc-500 hover:text-zinc-900 dark:hover:text-zinc-300">EVs Only</button>
            </div>
          )}
        </div>

        
        <div className="relative">
          {activeVehicle ? (
            <div className="w-100 lg:col-span-3 rounded-[2.5rem] overflow-hidden border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-950 shadow-2xl shadow-blue-500/5">
               <LiveTrip vehicle={activeVehicle} onEndTrip={handleEndTrip} />
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {suggestedCars.map(vehicle => (
                <div key={vehicle.id} className="group hover:-translate-y-2 transition-all duration-300">
                  <BookingCard vehicle={vehicle}  onBook={handleBooking} />
                </div>
              ))}
            </div>
          )}
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 pt-4">
          
          <div className="lg:col-span-2 space-y-6">
             <div className="flex items-center justify-between">
                <h3 className="text-xl font-bold text-zinc-900 dark:text-zinc-100">Recent Activity</h3>
                <button className="text-xs font-bold text-rose-600 hover:underline">View All</button>
             </div>
             
             <div className="bg-zinc-50 dark:bg-zinc-900/40 rounded-[2rem] border-2 border-dashed border-zinc-200 dark:border-zinc-800 p-12 flex flex-col items-center justify-center text-center">
                <div className="p-4 bg-zinc-100 dark:bg-zinc-800 rounded-full mb-4">
                   <CarFrontIcon size={24} className="text-zinc-400" />
                </div>
                <p className="text-zinc-500 dark:text-zinc-400 font-medium">No recent trips to display.</p>
                <p className="text-xs text-zinc-400 mt-1 uppercase tracking-widest font-bold">Start your first neuro-trip today</p>
             </div>
          </div>

          {/* <div className="space-y-6">
             <h3 className="text-xl font-bold text-zinc-900 dark:text-zinc-100">Your Impact</h3>
             <div className="bg-gradient-to-br from-blue-600 to-indigo-700 rounded-[2rem] p-8 text-white shadow-xl shadow-blue-500/20 relative overflow-hidden">
                <div className="relative z-10">
                   <p className="text-xs font-bold opacity-80 uppercase tracking-widest">CO2 Saved</p>
                   <p className="text-5xl font-black mt-2 tracking-tighter">142.5<span className="text-xl opacity-60 ml-2">kg</span></p>
                   <div className="mt-6 flex items-center gap-2 bg-white/10 w-fit px-3 py-1.5 rounded-full backdrop-blur-md border border-white/10">
                      <span className="text-[10px] font-bold">Top 5% of Fleet Users</span>
                   </div>
                </div>
                <div className="absolute -bottom-10 -right-10 w-48 h-48 bg-white/10 rounded-full blur-3xl"></div>
             </div>
          </div> */}

        </div>
      </div>
      

    </UserLayout>
    
  );
};

export default UserDashboardPage;