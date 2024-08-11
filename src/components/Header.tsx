import React from 'react';
// images
import Logo from '../assets/logo.svg';

// Define the Iprops interface if needed in the future
interface Iprops {
  // You can define props here if needed later
}

const Header: React.FC<Iprops> = ({}: Iprops) => {
  return (
    <header className='py-8 '>
      <div className='container mx-auto'>
        <div className='flex justify-between items-center'>
          {/* logo */}
          <a href='#'>
            <img src={Logo} alt='Logo' />
          </a>
          {/* button */}
          <button className='btn btn-sm'>Work with me</button>
        </div>
      </div>
    </header>
  );
};

export default Header;
