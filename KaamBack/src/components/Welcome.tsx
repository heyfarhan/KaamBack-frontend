import React, { useState } from 'react';
import Freelancer from "../assets/freelancer.png" ;
import Company from "../assets/human-resources.png";
import FreelancerCategory from './FreelancerCategory';


const style = {
  button: `flex items-center w-[85%] mx-auto text-black py-2 mb-2 rounded-lg px-2 bg-[#1F82E840]`,
  text: `ml-auto mr-auto text-[#838383]`,
  input: `w-full px-3 py-2 border border-black rounded-lg bg-[#BFE0FF] placeholder-[#838383] text-black` ,
  gridButton: `flex items-center justify-center mx-2 w-full py-7 px-4 text-black rounded-lg mb-7 bg-[#1F82E840]`, 
  icon: `mr-2 w-7 h-7` 
};

const Welcome = () => {
  const[showModal,setShowModal]=useState(false);
  const handleButton=()=>{
      setShowModal(true);
  }
  return (
    <div>
      {!showModal?(
          <>
      <h2 className="text-center text-2xl font-bold text-black ">Name,Welcome Aboard!<br/>Select your account type.</h2>
      <p className='text-center text-black text-xs mb-4 font-medium'>Feel free to change it later if needed.</p>
      <div className='w-[90%] mx-auto'>
      <div className='flex justify-around my-4'>
              <button className={style.gridButton}>
                <img src={Company} alt="Company Icon" className={style.icon} />
                <span className='text-black font-semibold'>Company</span>
              </button>
              <button className={style.gridButton}>
                <img src={Freelancer} alt="Freelancer Icon" className={style.icon} />
                <span className='text-black font-semibold'>Freelancer</span>
              </button>
            </div>
        <button className={style.button} onClick={handleButton}>
          <span className={style.text}>Continue</span>
        </button>
      </div>
      </>
        ) : (
          <FreelancerCategory onBack={() => setShowModal(false)} />
        )}
    </div>
  );
};

export default Welcome;
