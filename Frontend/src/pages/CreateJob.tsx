import React, { useState } from 'react';
import { FaRupeeSign, FaSearch, FaCalendarAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import DatePicker from 'react-datepicker';

import Logo from '../assets/logo.jpg';
import "react-datepicker/dist/react-datepicker.css";

// Static Data for Skill Sets, Cities, and Experience Options
const skillSetOptions = ['UI/UX Design', 'Web Developer', 'Full Stack Dev', 'Data Scientist', 'ML Developer'];
const cities = ['Mumbai', 'Delhi', 'Bangalore', 'Chennai', 'Kolkata', 'Hyderabad', 'Pune', 'Ahmedabad'];
const experienceOptions = ['Less than 1 year', '1 year', '2 years', '3 years', '4 years', 'More than 4 years'];

const CreateJob: React.FC = () => {
  const [selectedSkills, setSelectedSkills] = useState<string[]>([]);

  const handleSkillClick = (skill: string) => {
    if (!selectedSkills.includes(skill)) {
      setSelectedSkills([...selectedSkills, skill]);
    }
  };

  const handleSkillRemove = (skill: string) => {
    setSelectedSkills(selectedSkills.filter(s => s !== skill));
  };
  const [startDate, setStartDate] = useState<Date | null>(null); // Accept null

  return (
    <div className="flex bg-blue-50 min-h-screen"> {/* Added light blue background to the entire page */}
      {/* Sidebar */}
      <div className="bg-blue-800 w-72 text-white flex flex-col items-center py-5 font-bold">
        {/* Logo */}
        <img src={Logo} alt="KaamBack Logo" className="w-50 h-10 mb-12" /> {/* Adjusted logo size */}

        {/* Sidebar Menu */}
        <nav className="flex flex-col space-y-12"> {/* Increased space between menu items */}
          <Link to="/company-dashboard/create-job" className="flex items-center space-x-4">
            <span>Dashboard</span>
          </Link>

          <a href="/company-profile" className="flex items-center space-x-4">
            <span>Profile</span>
          </a>

          <a href="/messages" className="flex items-center space-x-4">
            <span>Messages</span>
          </a>

          <a href="/search" className="flex items-center space-x-4">
            <span>Search</span>
          </a>
        </nav>

        <div className="mt-auto">
          <a href="/settings" className="mb-8">Settings</a>
        </div>

        <div className="mt-auto">
          <a href="/logout">Log out</a>
        </div>
      </div>

      {/* Form Layout */}
      <div className="flex justify-center items-center w-full p-8">
        <div className="bg-white p-12 rounded-lg shadow-lg w-full max-w-5xl"> {/* Made the form a bit broader */}
          <h2 className="text-3xl font-semibold mb-8 text-center">Job Details</h2>
          <form className="space-y-6">
            {/* Department and Job Type */}
            <div className="grid grid-cols-2 gap-8 mb-6">
              <div>
                <label className="block font-semibold mb-2">Department</label>
                <select className="w-full p-3 border border-gray-300 rounded">
                  <option>Select Department</option>
                  <option>IT</option>
                  <option>HR</option>
                  <option>Finance</option>
                  <option>Marketing</option>
                </select>
              </div>
              <div>
                <label className="block font-semibold mb-2">Job Type</label>
                <select className="w-full p-3 border border-gray-300 rounded">
                  <option>Select Job Type</option>
                  <option>Full Time</option>
                  <option>Part Time</option>
                  <option>Contract</option>
                  <option>Internship</option>
                </select>
              </div>
            </div>

            {/* Location and Recruitment Period */}
            <div className="grid grid-cols-2 gap-8 mb-6">
              <div>
                <label className="block font-semibold mb-2">Location</label>
                <div className="relative">
                  <select className="w-full p-3 border border-gray-300 rounded">
                    <option>Search Location</option>
                    {cities.map((city, index) => (
                      <option key={index} value={city}>{city}</option>
                    ))}
                  </select>
                  <FaSearch className="absolute top-3 right-3 text-gray-500" />
                </div>
              </div>
              <div>
                <label className="block font-semibold mb-2">Recruitment Period</label>
                <div className="relative">
                  {/* React DatePicker */}
                  <DatePicker
                    selected={startDate}
                    onChange={(date: Date | null) => setStartDate(date)}
                    dateFormat="dd/MM/yyyy"
                    className="w-full p-3 border border-gray-300 rounded"
                    placeholderText="Select Recruitment Period"
                  />
                  <FaCalendarAlt className="absolute top-3 right-14 text-gray-500" />
                </div>
              </div>
            </div>

            {/* Expected Salary and Experience */}
            <div className="grid grid-cols-2 gap-8 mb-6">
              <div>
                <label className="block font-semibold mb-2">Expected Salary</label>
                <div className="relative">
                  <input
                    type="text"
                    className="w-full p-3 border border-gray-300 rounded"
                    placeholder="Enter expected salary"
                  />
                  <FaRupeeSign className="absolute top-3 right-3 text-gray-500" />
                </div>
              </div>
              <div>
                <label className="block font-semibold mb-2">Experience</label>
                <select className="w-full p-3 border border-gray-300 rounded">
                  <option>Select Experience</option>
                  {experienceOptions.map((option, index) => (
                    <option key={index} value={option}>{option}</option>
                  ))}
                </select>
              </div>
            </div>

            {/* Skill Sets */}
            <div className="mb-6">
              <label className="block font-semibold mb-2">Skill Sets</label>
              <div className="w-full p-3 border border-gray-300 rounded mb-4">
                {selectedSkills.map((skill, index) => (
                  <span
                    key={index}
                    onClick={() => handleSkillRemove(skill)}
                    className="inline-block bg-blue-200 text-blue-800 px-2 py-1 rounded-full mr-2 mb-2 cursor-pointer"
                  >
                    {skill}
                  </span>
                ))}
              </div>
              <div className="flex flex-wrap gap-4">
                {skillSetOptions.map((skill, index) => (
                  <button
                    key={index}
                    type="button"
                    onClick={() => handleSkillClick(skill)}
                    className={`px-4 py-2 rounded-full ${
                      selectedSkills.includes(skill)
                        ? 'bg-gray-300 cursor-not-allowed'
                        : 'bg-blue-100 hover:bg-blue-200 cursor-pointer'
                    }`}
                  >
                    {skill}
                  </button>
                ))}
              </div>
            </div>

            {/* Job Description */}
            <div className="mb-6">
              <label className="block font-semibold mb-2">Job Description</label>
              <textarea
                className="w-full p-3 border border-gray-300 rounded"
                placeholder="Enter job description"
                rows={4}
              />
            </div>

            {/* Submit Button */}
            <div className="text-center mt-10">
              <button
                type="submit"
                className="px-6 py-3 bg-blue-600 text-white font-semibold rounded hover:bg-blue-700"
              >
                Post
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CreateJob;
