// src/pages/Jobs.js
import React, { useState, useEffect } from 'react';
import JobCard from '../components/JobCard';

const Jobs = () => {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    // Fetch job listings from an API or local data (simulated here)
    const fetchJobs = () => {
      setJobs([
        { id: 1, title: 'Frontend Developer', company: 'Tech Innovators', location: 'Lagos', description: 'React developer needed.' },
        { id: 2, title: 'Backend Developer', company: 'Data Solutions', location: 'Abuja', description: 'Django developer needed.' },
        { id: 3, title: 'Cloud Engineer', company: 'CloudWorks', location: 'Remote', description: 'AWS certified required.' },
      ]);
    };
    fetchJobs();
  }, []);

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-3xl font-bold mb-6">Available Jobs</h2>
      {jobs.map((job) => (
        <JobCard key={job.id} job={job} />
      ))}
    </div>
  );
};

export default Jobs;
