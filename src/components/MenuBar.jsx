import React from 'react';
import { NavLink } from 'react-router-dom';

// Imports Menu Icons
import HomeIcon from 'react-icons/lib/ti/home-outline';
import ProfileIcon from 'react-icons/lib/md/face';
import ContactIcon from 'react-icons/lib/md/mail-outline';
import PortfolioIcon from 'react-icons/lib/fa/code';

const MenuBar = () => (
  <div className="MenuBar">
    <NavLink to="/" exact activeClassName="MenuBar__icon--active">
      <HomeIcon alt="Home icon" className="MenuBar__icon" />
    </NavLink>
    <NavLink to="/profile" activeClassName="MenuBar__icon--active">
      <ProfileIcon alt="Profile icon" className="MenuBar__icon" />
    </NavLink>
    <NavLink to="/portfolio" activeClassName="MenuBar__icon--active">
      <PortfolioIcon alt="Portfolio icon" className="MenuBar__icon" />
    </NavLink>
    <NavLink to="/contact" activeClassName="MenuBar__icon--active">
      <ContactIcon alt="Contact icon" className="MenuBar__icon" />
    </NavLink>
  </div>
);

export default MenuBar;
