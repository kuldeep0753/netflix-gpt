import React from 'react';
import ICON from '../assets/images/logo.webp';

const Header = () => {
  return (
    <div >
      <img src={ICON} alt="ICON" className='absolute w-[100px] p-[10px]'/>
    </div>
  );
};

export default Header;