import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useNavigate } from "react-router";

const Hero = () => {
  const navigate = useNavigate();
  return (
    <section className="bg-gradient-to-b from-[#f5f7ff] via-[#fffbee] to-[#E6EFFF] min-h-screen">
      {/* Navbar */}
      <nav className="flex items-center justify-between px-8 md:px-16 py-6">
        <h1 className="text-2xl font-semibold tracking-wider">NeuroFleetX</h1>
        <div className="hidden md:flex gap-10 text-sm text-gray-900">
          <a href="#features" className="hover:text-black transition">
            Features
          </a>
          <a href="#solutions" className="hover:text-black transition">
            Solutions
          </a>
          <a href="#contact" className="hover:text-black transition">
            Contact
          </a>
        </div>
        {/* <button className="rounded-2xl px-6" onClick={() => navigate("/login")}>
          Login
        </button> */}
        <div class="hidden md:flex space-x-4">
            <a onClick={()=>navigate('/login')} class="text-indigo-600 bg-indigo-100 px-5 py-2 rounded-full text-sm font-medium hover:bg-indigo-200 transition"
                href="#">
                Login
            </a>
            <a onClick={()=>navigate('/login')} class="bg-indigo-600 text-white px-5 py-2 rounded-full text-sm font-medium hover:bg-indigo-700 transition"
                href="#">
                Sign up
            </a>
        </div>
      </nav>

      <main className="flex flex-1 flex-col md:flex-row items-center max-md:text-center justify-between mt-16 px-6 sm:px-10 md:px-24 max-w-7xl mx-auto w-full">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-3xl md:text-6xl font-bold leading-tight max-w-5xl"
        >
          <div className="flex flex-col items-center md:items-start">
          <div className="flex items-center gap-4">
            <button
              className="mt-16 mb-6 flex items-center space-x-2 border border-indigo-600 text-indigo-600 text-xs rounded-full px-4 pr-1.5 py-1.5 hover:bg-indigo-50 transition"
              type="button"
            >
              <span className="w-2 h-2 bg-indigo-600 rounded-full animate-pulse" />
              <span>Smarter Cities</span>
            </button>
            <button
              className="mt-16 mb-6 flex items-center space-x-2 border border-indigo-600 text-indigo-600 text-xs rounded-full px-4 pr-1.5 py-1.5 hover:bg-indigo-50 transition"
              type="button"
            >
              <span className="w-2 h-2 bg-indigo-600 rounded-full animate-pulse" />
              <span>Intelligent Fleets</span>
            </button>
          </div>
            
            <h1 className="text-gray-900 font-semibold text-3xl sm:text-4xl md:text-5xl max-w-xl">
              AI-Driven Mobility Solutions
            </h1>

            <p className="mt-4 text-gray-600 max-w-md text-sm sm:text-base leading-relaxed">
              AI-powered mobility optimization platform designed to transform
              urban transport, logistics, and smart city ecosystems.
            </p>

            <a
              className="text-indigo-600 flex items-center gap-1 mt-8 bg-indigo-100 px-5 py-2 rounded-full text-sm font-medium hover:bg-indigo-200 transition"
              href="#"
            >
              Get Started <ArrowRight size={12} />
            </a>
          </div>
        </motion.h2>

        <div className="mt-12 grid grid-cols-2 gap-6 pb-6">
          {[
            "https://plus.unsplash.com/premium_vector-1746119139844-43296749b6e2?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGVsZWN0cmljJTIwc2Nvb3RlcnxlbnwwfHwwfHx8MA%3D%3D",
            "https://plus.unsplash.com/premium_vector-1682300615214-27626e2042dc?q=80&w=2396&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            "https://plus.unsplash.com/premium_vector-1682298266839-5a6916cda41a?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y3ljbGV8ZW58MHx8MHx8fDA%3D",
            "https://plus.unsplash.com/premium_vector-1715097017025-025f8282fb97?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGJ1c3xlbnwwfHwwfHx8MA%3D%3D",
          ].map((src, index) => (
            <img
              key={index}
              src={src}
              alt="Leader"
              className="w-64 h-44 rounded-lg hover:scale-105 transition duration-300 object-cover shadow-lg"
            />
          ))}
        </div>

        
      </main>

      {/* Footer */}
      <div className="border-t border-gray-700 mt-44 pt-8 text-center text-gray-400 text-sm">
        <p>&copy; 2026 NeuroFleetX. All rights reserved.</p>
      </div>
    </section>
  );
};

export default Hero;
