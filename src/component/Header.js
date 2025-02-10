
import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <header>
      <h1>BonTech</h1>
      <nav>
        <ul>
          <li>
            <NavLink
              to="/"
              end
              className={({ isActive }) => (isActive ? 'active' : '')}
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/bontech"
              className={({ isActive }) => (isActive ? 'active' : '')}
            >
              Bontech
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/connect"
              className={({ isActive }) => (isActive ? 'active' : '')}
            >
              Connect
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
