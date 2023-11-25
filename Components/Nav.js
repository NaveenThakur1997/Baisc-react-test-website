import React from 'react';
import Logo from './Logo';

const Nav = () => {
  return (
    <div className="flex justify-between items-center py-0 px-10 ">
       <Logo /> {/* Include your Logo component here */}
      <h3>Home</h3>
      <h3>About Us</h3>
      <h3>Sectors</h3>
      <h3>Projects</h3>
      <h3>Achievements</h3>
      <h3>Career</h3>
      <h3>Contract</h3>
      <div >
        <button className="bg-red-700 text-white px-6 py-2 rounded-full">Query</button>
      </div>
    </div>
  );
};

export default Nav;