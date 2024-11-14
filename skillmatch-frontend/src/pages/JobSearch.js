import React, { useState } from 'react';
import SearchBar from '../components/SearchBar';
import JobCard from '../components/JobCard';

const JobSearch = () => {
  const [jobs, setJobs] = useState([
    { id: 1, title: 'Frontend Developer', company: 'Tech Innovators', location: 'Lagos', description: 'React developer needed.' },
    { id: 2, title: 'Backend Developer', company: 'Data Solutions', location: 'Abuja', description: 'Django developer needed.' },
    { id: 3, title: 'Cloud Engineer', company: 'CloudWorks', location: 'Remote', description: 'AWS certified required.' },
  ]);

  const [filteredJobs, setFilteredJobs] = useState(jobs);

  const handleSearch = ({ title, location }) => {
    const filtered = jobs.filter(
      (job) =>
        job.title.toLowerCase().includes(title.toLowerCase()) &&
        job.location.toLowerCase().includes(location.toLowerCase())
    );
    setFilteredJobs(filtered);
  };

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-3xl font-bold mb-6">Search for Jobs</h2>
      <SearchBar onSearch={handleSearch} />
      {filteredJobs.map((job) => <JobCard key={job.id} job={job} />)}
    </div>
  );
};

export default JobSearch;
