import React, { useState } from 'react';
import VerifyEmail from './VerifyEmail';
import Profileimg from "../assets/profileicon.png" 

const style = {
  button: `flex items-center w-full text-black py-2 mb-2 rounded-lg px-3 bg-[#1F82E840]`,
  text: `ml-auto mr-auto text-[#838383]`,
  input: `w-full px-3 py-2 border border-black rounded-lg bg-[#BFE0FF] placeholder-[#838383] text-black` // updated styles for input
};

const Profile = () => {
  const[showModal,setShowModal]=useState(false);
  const handleButton=()=>{
      setShowModal(true);
  }
  return (
    <div className='w-[80%] mx-auto'>
      {!showModal?(
          <>
      <h2 className="text-cerofilenter text-2xl font-bold text-black mb-4 text-center">Personal Info</h2>
      <div className='flex items-center mx-auto justify-center'>
      <img src={Profileimg} alt="profile" className='rounded-full w-[50px] h-[50px] mb-3' />
      </div>
      <div className='w-[90%] mx-auto'>
        <div className="mb-4">
          <input className={style.input} placeholder='Full name' type="text" id="fname" name="fname" required />
        </div>
        <div className="mb-4">
          <input className={style.input} placeholder='Display name' type="text" id="dname" name="dname" required />
        </div>
        <div className="mb-4">
          <input className={style.input} placeholder='Phone no' type="tel" id="phno" name="phno" required />
        </div>
        <div className="mb-4">
          <input className={style.input} placeholder='Description' type="text" id="desc" name="desc"  />
        </div>
        <button className={style.button} onClick={handleButton}>
          <span className={style.text}>Continue</span>
        </button>
      </div>
      </>
        ) : (
          <VerifyEmail onBack={() => setShowModal(false)} />
        )}
    </div>
  );
};

export default Profile;
