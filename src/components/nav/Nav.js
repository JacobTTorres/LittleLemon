import React from 'react';

import './nav.css';

import Logo from '../../icons_assets/Logo.svg';

export default function Nav() {
  return (
    <nav className="topNavbar">
      {/* <img src={Logo} alt="Little Lemon img" /> */}
      <ul className="navLinks">
        <li className="links">Home</li>
        <li className="links">About</li>
        <li className="links">Menu</li>
        <li className="links">Reservations</li>
        <li className="links">Order Online</li>
        <li className="links">Login</li>
      </ul>
    </nav>
  );
}
