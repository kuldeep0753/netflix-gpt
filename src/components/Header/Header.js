import React from 'react';
import ICON from '../../assets/images/Netflix_Logo.png';

const Header = () => {
  return (
    <div className=' absolute px-8 py-2 bg-gradient-to-b from-black z-40'>
      <img src={ICON} alt="ICON" className='w-44'/>
    </div>
  );
};

export default Header;