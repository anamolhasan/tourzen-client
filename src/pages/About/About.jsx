import React from 'react'



const About = () => {


    return (
    <div className="max-w-5xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold text-center mb-6">About Us</h1>
      
      <p className="text-lg  mb-6 text-justify">
        <strong>TourZen</strong> is your trusted travel companion. We help travelers discover and book the best tour packages across Bangladesh. 
        Our mission is to provide a reliable platform for finding experienced guides and enjoying safe, meaningful travel experiences.
      </p>

      <div className="grid md:grid-cols-2 gap-8 mt-10">
        <div>
          <h2 className="text-2xl font-semibold mb-2">🌍 Our Mission</h2>
          <p className="">
            To promote sustainable tourism by connecting local guides with travelers, encouraging cultural discovery and eco-friendly journeys.
          </p>
        </div>
        <div>
          <h2 className="text-2xl font-semibold mb-2">🔒 Our Promise</h2>
          <p className="">
            We prioritize secure bookings, accurate tour details, and protection of user privacy — always.
          </p>
        </div>
      </div>

      <div className="mt-10">
        <h2 className="text-2xl font-semibold mb-2">🧭 Why Choose TourZen?</h2>
        <ul className="list-disc list-inside ">
          <li>Connect directly with verified tour guides</li>
          <li>Fast and easy booking process</li>
          <li>Filter packages by date, price, and location</li>
          <li>Trusted ratings and real reviews</li>
        </ul>
      </div>
    </div>
  );
}

export default About
