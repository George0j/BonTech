import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import menuIcon from './images/Menu.png';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header>
      <h1>BonTech</h1>

      {/* Menu Icon */}
      <div className="menu-icon" onClick={() => setIsOpen(!isOpen)}>
        <img src={menuIcon} alt="Menu" />
      </div>

      <nav className={`nav-links ${isOpen ? 'open' : ''}`}>
        <ul>
          <li>
            <NavLink to="/" end className={({ isActive }) => (isActive ? 'active' : '')}>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/bontech" className={({ isActive }) => (isActive ? 'active' : '')}>
              Bontech
            </NavLink>
          </li>
          <li>
            <NavLink to="/connect" className={({ isActive }) => (isActive ? 'active' : '')}>
              Connect
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
