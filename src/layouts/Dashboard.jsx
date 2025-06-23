import React from "react";
import { Outlet } from "react-router";
import Navbar from "../components/shared/Navbar";
import Footer from "../components/shared/Footer";
import DashboardAside from "../components/shared/DashboardAside";

const Dashboard = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      <div className="container mx-auto flex flex-col md:flex-row gap-5 px-4 py-6 flex-grow">
        
        {/* Sidebar */}
        <aside className="hidden md:block md:w-1/3 lg:w-1/4 xl:w-1/5">
          <DashboardAside />
        </aside>

        {/* Main content */}
        <main className="w-full md:w-2/3 lg:w-3/4 xl:w-4/5">
          <Outlet />
        </main>
      </div>

      <Footer />
    </div>
  );
};

export default Dashboard;
