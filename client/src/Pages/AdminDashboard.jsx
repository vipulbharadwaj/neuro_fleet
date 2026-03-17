import React from "react";
import AdminLayout from "../Components/AdminLayout";

import { MapIcon, MapPinCheckIcon, PlayCircleIcon } from "lucide-react";
import {
  FiCheckCircle,
  FiClock,
  FiDollarSign,
  FiNavigation,
  FiTrendingDown,
  FiTrendingUp,
  FiTruck,
  FiUsers,
} from "react-icons/fi";
import FleetHeatmap from "../Components/FleetHeatMap";
import KpiCards from "../Components/KPICards";
import HourlyChart from "../Components/HourlyChart";

const AdminDashboard = () => {
  const kpiData = [
    {
      title: "Total Fleet",
      value: "1,042",
      trend: "12%",
      trendDirection: "up",
      icon: <FiTruck />,
      color: "blue",
      progress: 92,
    },
    {
      title: "Trips Today",
      value: "8,430",
      trend: "5%",
      trendDirection: "up",
      icon: <FiNavigation />,
      color: "green",
      progress: 85,
    },
    {
      title: "Active Routes",
      value: "312",
      trend: "2%",
      trendDirection: "down",
      icon: <FiTrendingUp />,
      color: "purple",
      progress: 78,
    },
    {
      title: "Avg Travel Time",
      value: "24 min",
      trend: "8%",
      trendDirection: "down",
      icon: <FiClock />,
      color: "yellow",
    },
    {
      title: "Delivery Time",
      value: "18 min",
      trend: "4%",
      trendDirection: "down",
      icon: <FiCheckCircle />,
      color: "red",
    },
  ];
  return (
    <AdminLayout>
      <div className="flex flex-col gap-6">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <h1 className="text-2xl font-bold text-zinc-900 dark:text-zinc-100">
            Urban Mobility Insights
          </h1>
          <div className="flex gap-3">
            <button className="px-4 py-2 text-sm font-medium bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-lg shadow-sm text-zinc-700 dark:text-zinc-300 hover:bg-zinc-50 dark:hover:bg-zinc-800 transition-colors">
              Export CSV
            </button>
            <button className="px-4 py-2 text-sm font-medium bg-blue-600 hover:bg-blue-700 text-white rounded-lg shadow-sm transition-colors">
              Download PDF
            </button>
          </div>
        </div>

        <div className="dashboard-wrapper mb-2">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 lg:gap-8">
            {kpiData.map((kpi, index) => (
              <KpiCards
                key={index}
                title={kpi.title}
                value={kpi.value}
                icon={kpi.icon}
                trend={kpi.trend}
                trendDirection={kpi.trendDirection}
                color={kpi.color}
                progress={kpi.progress}
                onClick={() => console.log(`${kpi.title} clicked`)}
              />
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 h-[500px]">
          <div className="lg:col-span-2 bg-white dark:bg-zinc-900 rounded-xl shadow-sm border border-zinc-200 dark:border-zinc-800 p-5 flex flex-col">
            <h2 className="text-lg font-semibold mb-4 text-zinc-800 dark:text-zinc-100">
              Vehicle Heatmap
            </h2>
            <div className="flex-1 rounded-lg overflow-hidden relative border border-zinc-100 dark:border-zinc-800">
              <FleetHeatmap />
            </div>
          </div>

          <div className="bg-white dark:bg-zinc-900 rounded-xl shadow-sm border border-zinc-200 dark:border-zinc-800 p-5 flex flex-col">
            <h2 className="text-lg font-semibold mb-4 text-zinc-800 dark:text-zinc-100">
              Hourly Activity
            </h2>
            <div className="flex-1 relative">
              <HourlyChart />
            </div>
          </div>
        </div>
      </div>
    </AdminLayout>
  );
};

export default AdminDashboard;
