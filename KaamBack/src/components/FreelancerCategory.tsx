import React, { useState } from 'react';
import Profile from './Profile';
const style = {
  button: `flex items-center w-[85%] mx-auto text-black py-2 mb-2 rounded-lg px-2 bg-[#1F82E840]`,
  text: `ml-auto mr-auto text-[#838383]`,
  input: `w-full px-3 py-2 border border-black rounded-lg bg-[#BFE0FF] placeholder-[#838383] text-black` ,
  gridButton: `flex items-center justify-center mx-2 w-full py-7 px-4 text-black rounded-lg mb-5 bg-[#1F82E840]`, 
  icon: `mr-2 w-7 h-7` ,
  grid:`flex items-center justify-center mx-2 w-full py-2 px-4 text-black rounded-lg mb-7 bg-[#1F82E840]`
};

const FreelancerCategory = () => {
  const[showModal,setShowModal]=useState(false);
  const handleButton=()=>{
      setShowModal(true);
  }
  return (
    <div>
      {!showModal?(
          <>
      <h2 className="text-center text-2xl font-bold text-black ">Which Freelancer category fits you?</h2>
      
      <div className='w-[90%] mx-auto'>
      <div className='flex justify-around my-4'>
              <button className={style.gridButton}>
                <span className='text-black font-semibold'>Side Hustle</span>
              </button>
              <button className={style.gridButton}>
                <span className='text-black font-semibold'>Solo freelancer</span>
              </button>
            </div>
            <div className='flex justify-around my-4'>
        <button className={style.button && style.grid} onClick={handleButton}>
          <span className={style.text}>Finish your Profile</span>
        </button>
        <button className={style.button && style.grid} onClick={handleButton}>
          <span className={style.text}>Explore KaamBack</span>
        </button>
      </div>
      </div>
      </>
        ) : (
          <Profile onBack={() => setShowModal(false)} />
        )}
    </div>
  );
};

export default FreelancerCategory;