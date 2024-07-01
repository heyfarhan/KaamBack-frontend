// EmailForm.js or EmailForm.tsx
import React, { useState } from 'react';
import VerifyEmail from './VerifyEmail';

const style = {
  button: `flex items-center w-full text-black py-2 mb-2 rounded-lg px-3 bg-[#1F82E840]`,
  text: `ml-auto mr-auto text-[#838383]`,
  input: `w-full px-3 py-2 border rounded-lg bg-[#BFE0FF] placeholder-[#838383] text-black` // updated styles for input
};

const Email = ({ onBack }) => {
  const[showModal,setShowModal]=useState(false);
  const handleButton=()=>{
      setShowModal(true);
  }
  return (
    <div>
      {!showModal?(
          <>
      <h2 className="text-center text-2xl font-bold text-black mb-4">Continue with Email</h2>
      <div className='w-[90%] mx-auto'>
        <div className="mb-4">
          <input className={style.input} placeholder='Email' type="email" id="email" name="email" required />
        </div>
        <div className="mb-4">
          <input className={style.input} placeholder='Password' type="password" id="password" name="password" required />
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

export default Email;
