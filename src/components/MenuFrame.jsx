import React from 'react';
import { NavLink } from 'react-router-dom';

// Imports Menu Icons
import HomeIcon from 'react-icons/lib/ti/home-outline';
import ProfileIcon from 'react-icons/lib/md/face';
import ContactIcon from 'react-icons/lib/md/mail-outline';
import PortfolioIcon from 'react-icons/lib/fa/code';

const MenuFrame = () => (
  <div>
    <NavLink to="/" exact activeClassName="MenuFrame__icon--active">
      <div className="MenuFrame MenuFrame--topFrame">
        <HomeIcon alt="Home icon" className="MenuFrame__icon MenuFrame__top-icon" />
      </div>
    </NavLink>
    <NavLink to="/profile" activeClassName="MenuFrame__icon--active">
      <div className="MenuFrame MenuFrame--leftFrame">
        <ProfileIcon alt="Profile icon" className="MenuFrame__icon MenuFrame__left-icon" />
      </div>
    </NavLink>
    <NavLink to="/contact" activeClassName="MenuFrame__icon--active">
      <div className="MenuFrame MenuFrame--bottomFrame">
        <ContactIcon alt="Contact icon" className="MenuFrame__icon MenuFrame__bottom-icon" />
      </div>
    </NavLink>
    <NavLink to="/portfolio" activeClassName="MenuFrame__icon--active">
      <div className="MenuFrame MenuFrame--rightFrame">
        <PortfolioIcon alt="Portfolio icon" className="MenuFrame__icon MenuFrame__right-icon" />
      </div>
    </NavLink>
  </div>
);

export default MenuFrame;
