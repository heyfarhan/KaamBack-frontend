import React, { useState } from 'react';
import Welcome from './Welcome';


const style = {
  button: `flex items-center w-full text-black py-2 mb-2 rounded-lg px-3 bg-[#1F82E840]`,
  text: `ml-auto mr-auto text-[#838383]`,
  input: `w-full px-3 py-2 border border-black rounded-lg bg-[#BFE0FF] placeholder-[#838383] text-black` // updated styles for input
};



const CreateProfile = () => {
  const[showModal,setShowModal]=useState(false);
  const handleButton=()=>{
      setShowModal(true);
  }
  return (
    <div>
      {!showModal?(
          <>
      <h2 className="text-center text-2xl font-bold text-black mb-4">Start creating your profile</h2>
      <div className='w-[90%] mx-auto'>
        <div className="mb-4">
          <input className={style.input} placeholder='Username' type="text" id="username" name="username" required />
        </div>
        <h2 className='text-center text-xs font-semibold text-[#1F82E8] mb-4'>Build trust by using your full name or business name</h2>
        <button className={style.button} onClick={handleButton}>
          <span className={style.text}>Continue</span>
        </button>
      </div>
      </>
        ) : (
          <Welcome onBack={() => setShowModal(false)} />
        )}
    </div>
  );
};

export default CreateProfile;
