import React, { useState } from 'react';
import CreateProfile from './createProfile';

const style = {
  button: `flex items-center w-full text-black py-2 mb-2 rounded-lg px-3 bg-[#1F82E840]`,
  text: `ml-auto mr-auto text-[#838383]`,
  input: `w-full px-3 py-2 border rounded-lg bg-[#BFE0FF] placeholder-[#838383] text-black`,
  otpInput: `w-12 h-12 border border-black rounded-lg bg-[#BFE0FF] text-center text-black`, // updated styles for OTP input
  container: `flex space-x-2 justify-center mb-4` // styles for container holding OTP inputs
};

const VerifyEmail= () => {
    const[showModal,setShowModal]=useState(false);
    const handleButton=()=>{
        setShowModal(true);
    }
  return (
    <div>
        {!showModal?(
          <>
      <h2 className="text-center text-2xl font-bold text-black mb-4">Verify your Email</h2>
      <p className="text-center text-black font-medium mb-4">Enter OTP sent to your email</p>
      <div className='w-[90%] mx-auto'>
        <div className={style.container}>
          <input className={style.otpInput} type="text"  />
          <input className={style.otpInput} type="text" />
          <input className={style.otpInput} type="text" />
          <input className={style.otpInput} type="text" />
        </div>
        <button className={style.button} onClick={handleButton}>
          <span className={style.text}>Continue</span>
        </button>
      </div>
      </>
        ) : (
          <CreateProfile onBack={() => setShowModal(false)} />
        )}
    </div>
  );
};

export default VerifyEmail;
