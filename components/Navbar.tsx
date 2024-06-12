import React from 'react';
import Link from 'next/link';
import { Cursor } from 'mongoose';

const Navbar = () => {
  return (
    <div className='topbar'>
      <div className='header-container'>
        <h1><Link href="/" className='point'>Gauresh G Pai</Link></h1>
      </div>
      {/**Buttons to be added here */}
    </div>
  );
};

export default Navbar;
