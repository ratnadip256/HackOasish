import React from "react";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaFacebook, FaTwitter, FaInstagram, FaPlane, FaHotel } from "react-icons/fa";

const ContactUs = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-blue-100 flex items-center justify-center p-6">
      <div className="max-w-6xl w-full grid md:grid-cols-2 gap-10 bg-white shadow-2xl rounded-3xl overflow-hidden">

        {/* Left side - Info */}
        <div className="bg-blue-600 text-white p-10 flex flex-col justify-center">
          <h2 className="text-3xl font-bold mb-6 flex items-center gap-2"><FaPlane /> Travel Support</h2>
          <p className="mb-8 text-blue-100">
            Planning your next adventure? We are here to help! Contact us for bookings, inquiries, or travel suggestions.
          </p>

          <div className="space-y-4">
            <p className="flex items-center gap-3"><FaPhoneAlt /> +91 98765 43210</p>
            <p className="flex items-center gap-3"><FaEnvelope /> support@travelia.com</p>
            <p className="flex items-center gap-3"><FaMapMarkerAlt /> 123 Travel Street, Wander City, India</p>
          </div>

          <div className="flex gap-5 mt-8 text-xl">
            <a href="#" className="hover:text-blue-300"><FaFacebook /></a>
            <a href="#" className="hover:text-blue-300"><FaTwitter /></a>
            <a href="#" className="hover:text-blue-300"><FaInstagram /></a>
          </div>
        </div>

        {/* Right side - Form */}
        <div className="p-10">
          <h2 className="text-3xl font-bold text-gray-800 mb-6 flex items-center gap-2"><FaHotel /> Book a Service</h2>
          <form className="space-y-5">
            <input
              type="text"
              placeholder="Full Name"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
            <input
              type="email"
              placeholder="Email Address"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
            <input
              type="text"
              placeholder="Destination / Service"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
            <textarea
              placeholder="Your Message / Requirements"
              rows="5"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            ></textarea>
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
            >
              Send Request
            </button>
          </form>
        </div>

      </div>
    </div>
  );
};

export default ContactUs;
