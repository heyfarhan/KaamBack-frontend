import React, { useState } from 'react';
import Timing from '../assets/timing.png';
import Loc from '../assets/loc.png';
import EnquireForm from './Enquireform';

const style = {
  dropdown: `bg-blue-200 border border-black text-gray-600 py-2 px-4 rounded-xl focus:outline-none shadow-xl`,
  card: `rounded-xl shadow-xl py-7 px-4 mb-4 relative`,
  role: `font-semibold text-xl ml-5`,
  viewrole: `absolute right-4 top-4 bg-[#97C8F9] text-black font-semibold py-2 px-4 rounded-3xl`
};

const Team = () => {
  const [showModal, setShowModal] = useState(false);
  const teamMembers = [
    { role: "Role Name", department: "Dept Type", location: "Loc Type", employment: "Emp Type " },
    { role: "Role Name", department: "Dept Type", location: "Loc Type", employment: "Emp Type " },
    { role: "Role Name", department: "Dept Type", location: "Loc Type", employment: "Emp Type " },
    { role: "Role Name", department: "Dept Type", location: "Loc Type", employment: "Emp Type " },
    { role: "Role Name", department: "Dept Type", location: "Loc Type", employment: "Emp Type " },
  ];


  const handleViewRole = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <div className="mx-auto flex justify-center mt-2 px-4">
      <div className="bg-blue-200 w-full lg:w-[75%] py-10 rounded-2xl overflow-x-auto">
        <div className="px-7">
          <h1 className="font-bold text-left mb-6 text-2xl">Join the Team</h1>
          <div className="flex justify-start mt-4">
            <select className={style.dropdown}>
              <option>All Departments</option>
              <option>Design</option>
              <option>Development</option>
              <option>Marketing</option>
              <option>Sales</option>
            </select>
          </div>
          {teamMembers.map((item, index) => (
            <div className={style.card} key={index}>
              <h1 className={style.role}>{item.role}</h1>
              <div className="flex ml-2 mt-2">
                <img src={Loc} alt="Loc" className="w-3 h-3 mt-1 ml-2" />
                <h1 className="ml-1 font-semibold text-sm">Remote</h1>
                <img src={Timing} alt="Timing" className="w-3 h-3 mt-1 ml-3" />
                <h1 className="ml-1 font-semibold text-sm">Internship</h1>
              </div>
              <button className={style.viewrole} onClick={handleViewRole}>
                Know more
              </button>
            </div>
          ))}
        </div>
      </div>
      {showModal && <EnquireForm onClose={handleCloseModal} />}
    </div>
  );


export default Team;
