import React from 'react'
import logo from './images/logo.svg'
import { FaBars } from 'react-icons/fa'
import { useGlobalContext } from './context';

const Navbar = () => {
  const { openSidebar, openSubmenu, closeSubmenu } = useGlobalContext();
  return <nav className='nav'>
    <div className="nav-center">
      <div className="nav-header">
        <img src={logo} classNamenav-logo alt="stripe" />
      </div>
      <div className="nav-links">
        <div>
          <ul className="nav-links"></ul>
        </div>
      </div>
    </div>
  </nav>
}

export default Navbar