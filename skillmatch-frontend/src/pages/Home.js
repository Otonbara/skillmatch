// src/pages/Home.js
import React from 'react';
import heroImage from '../assets/hero.jpg'; // Import the image from the assets folder

const Home = () => {
  return (
    <div className="container mx-auto p-4">
      {/* Hero Section with Background Image */}
      <section className="relative text-center py-56 px-0 mx-0 my-0 bg-cover bg-center" style={{ backgroundImage: `url(${heroImage})` }}>
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative z-10 text-white">
          <h1 className="text-5xl font-bold mb-4">Welcome to SkillMatch</h1>
          <p className="text-xl mb-6">Your trusted platform for finding your dream job or the perfect candidate</p>
          <button className="bg-white text-blue-600 px-6 py-2 rounded font-semibold">Get Started</button>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-12">
        <h2 className="text-3xl font-bold text-center mb-6">Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-gray-100 p-6 rounded shadow-md">
            <h3 className="text-xl font-semibold mb-4">Job Match Algorithm</h3>
            <p>Our intelligent matching algorithm helps you find the best job opportunities based on your skills, location, and preferences.</p>
          </div>
          <div className="bg-gray-100 p-6 rounded shadow-md">
            <h3 className="text-xl font-semibold mb-4">Easy Profile Setup</h3>
            <p>Create a personalized profile to showcase your experience and skills, making it easier for employers to find you.</p>
          </div>
          <div className="bg-gray-100 p-6 rounded shadow-md">
            <h3 className="text-xl font-semibold mb-4">Employer Access</h3>
            <p>Employers can easily post job listings and search for qualified candidates based on their job requirements.</p>
          </div>
        </div>
      </section>

      {/* How it Works Section */}
      <section className="bg-gray-50 py-12">
        <h2 className="text-3xl font-bold text-center mb-6">How It Works</h2>
        <div className="flex flex-col md:flex-row justify-around items-center">
          <div className="text-center mb-8 md:mb-0">
            <h3 className="text-2xl font-semibold mb-4">1. Sign Up</h3>
            <p>Create an account on SkillMatch to start your job search journey or post job listings if you are an employer.</p>
          </div>
          <div className="text-center mb-8 md:mb-0">
            <h3 className="text-2xl font-semibold mb-4">2. Match Jobs</h3>
            <p>Our system matches you with relevant jobs based on your skills, location, and preferences.</p>
          </div>
          <div className="text-center">
            <h3 className="text-2xl font-semibold mb-4">3. Get Hired</h3>
            <p>Employers reach out to you for interviews or you can apply directly to job postings that interest you.</p>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-12 bg-blue-50">
        <h2 className="text-3xl font-bold text-center mb-6">What Our Users Say</h2>
        <div className="flex flex-wrap justify-center">
          <div className="bg-white p-6 rounded shadow-md max-w-xs mx-4 mb-8">
            <p className="italic text-gray-600">"SkillMatch helped me find my perfect job in just two weeks. The process was smooth, and the support team was great!"</p>
            <p className="mt-4 font-semibold">John Doe</p>
            <p className="text-gray-500">Software Engineer</p>
          </div>
          <div className="bg-white p-6 rounded shadow-md max-w-xs mx-4 mb-8">
            <p className="italic text-gray-600">"As an employer, I was able to find highly qualified candidates quickly. The platform made hiring easy!"</p>
            <p className="mt-4 font-semibold">Jane Smith</p>
            <p className="text-gray-500">HR Manager</p>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="text-center py-16 bg-blue-600 text-white">
        <h2 className="text-3xl font-bold mb-4">Start Your Job Search Today!</h2>
        <p className="text-lg mb-6">Find your next career opportunity or hire your next team member with SkillMatch.</p>
        <button className="bg-white text-blue-600 px-6 py-2 rounded font-semibold">Join Now</button>
      </section>
    </div>
  );
};

export default Home;
