import React from "react";

const Signup = () => {
  return (
    <div
      className="flex items-center justify-center min-h-screen bg-cover bg-center"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1643617527132-11688502923d?q=80&w=1170&auto=format&fit=crop')",
      }}
    >
      <div className="w-[420px] bg-white/10 border border-red-200/20 backdrop-blur-md text-white rounded-xl p-10">
        <form className="flex flex-col">
          <h1 className="text-4xl text-center mb-8">Sign Up</h1>

          {/* Full Name */}
          <div className="relative mb-6">
            <input
              type="text"
              placeholder="Full Name"
              required
              className="w-full h-12 pl-5 pr-12 bg-transparent border border-white/20 rounded-full text-white placeholder-white/80 focus:outline-none"
            />
            <i className="bx bxs-user absolute right-5 top-1/2 -translate-y-1/2 text-xl"></i>
          </div>

          {/* Email */}
          <div className="relative mb-6">
            <input
              type="email"
              placeholder="Email"
              required
              className="w-full h-12 pl-5 pr-12 bg-transparent border border-white/20 rounded-full text-white placeholder-white/80 focus:outline-none"
            />
            <i className="bx bxs-envelope absolute right-5 top-1/2 -translate-y-1/2 text-xl"></i>
          </div>

          {/* Password */}
          <div className="relative mb-6">
            <input
              type="password"
              placeholder="Password"
              required
              className="w-full h-12 pl-5 pr-12 bg-transparent border border-white/20 rounded-full text-white placeholder-white/80 focus:outline-none"
            />
            <i className="bx bxs-lock-alt absolute right-5 top-1/2 -translate-y-1/2 text-xl"></i>
          </div>

          {/* Confirm Password */}
          <div className="relative mb-6">
            <input
              type="password"
              placeholder="Confirm Password"
              required
              className="w-full h-12 pl-5 pr-12 bg-transparent border border-white/20 rounded-full text-white placeholder-white/80 focus:outline-none"
            />
            <i className="bx bxs-lock absolute right-5 top-1/2 -translate-y-1/2 text-xl"></i>
          </div>

          {/* Signup Button */}
          <button
            type="submit"
            className="w-full h-12 bg-white text-gray-800 font-semibold rounded-full shadow-md hover:bg-white/90 transition"
          >
            Sign Up
          </button>

          {/* Already have account */}
          <p className="text-center text-sm mt-5">
            Already have an account?{" "}
            <a href="/login" className="font-semibold hover:underline">
              Login
            </a>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Signup;
