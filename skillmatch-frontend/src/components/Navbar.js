import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-blue-600 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-white text-2xl font-bold">SkillMatch</h1>
        <div className="space-x-4">
          <Link to="/" className="text-white">Home</Link>
          <Link to="/jobs" className="text-white">Jobs</Link>
          <Link to="/job-search" className="text-white">Job Search</Link>
          <Link to="/profile" className="text-white">Profile</Link>
          <Link to="/login" className="text-white">Login</Link>
          <Link to="/register" className="text-white">Register</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
