import React from "react";
import { FaFacebook, FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa";
import { Link } from "react-router"; 

const Footer = () => {
  return (
    <footer className="bg-base-200 mt-20 text-base-content  px-4 md:px-10 py-10 ">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Logo + About */}
        <div>
          <Link to={'/'} className="text-2xl font-bold text-primary">TourZen</Link>
          <p className="mt-2 text-sm">
            Discover and book amazing local tour packages with us.
          </p>
        </div>

        {/* Address */}
        <div>
          <h3 className="text-lg font-semibold mb-2">📍 Address</h3>
          <p>123 Himalaya Avenue</p>
          <p>Dhaka, Bangladesh</p>
          <p>Email: contact@tourzen.com</p>
        </div>

        {/* Policies */}
        <div>
          <h3 className="text-lg font-semibold mb-2">🔐 Legal</h3>
          <ul className="space-y-1 text-sm">
            <li><Link to={'/terms'} className="hover:underline">Terms & Conditions</Link></li>
            <li><Link to={'/privacy'} className="hover:underline">Privacy Policy</Link></li>
          </ul>
        </div>

        {/* Social Media */}
        <div>
          <h3 className="text-lg font-semibold mb-2">🌐 Follow Us</h3>
          <div className="flex gap-4 text-xl">
            <a href="https://www.facebook.com/"><FaFacebook className="hover:text-blue-600" /></a>
            <a href="https://x.com/?lang=en"><FaTwitter className="hover:text-sky-400" /></a>
            <a href="https://www.instagram.com/"><FaInstagram className="hover:text-pink-500" /></a>
            <a href="https://www.youtube.com/"><FaYoutube className="hover:text-red-600" /></a>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="text-center mt-10 border-t pt-6 text-sm">
        ©  {new Date().getFullYear()} TourZen. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
