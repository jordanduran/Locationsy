import React, { useState, Fragment } from 'react';
import { Link } from 'react-router-dom';

import MainHeader from './MainHeader';
import NavLinks from './NavLinks';
import SideDrawer from './SideDrawer';
import Backdrop from '../components/UIElements/Backdrop';
import logo from '../../assets/logo.png';
import './MainNavigation.css';

const MainNavigation = (props) => {
  const [drawerIsOpen, setDrawerIsOpen] = useState(false);

  const handleOpenDrawer = () => {
    setDrawerIsOpen(true);
  };

  const handleCloseDrawer = () => {
    setDrawerIsOpen(false);
  };

  return (
    <Fragment>
      {drawerIsOpen && <Backdrop onClick={handleCloseDrawer} />}
      <SideDrawer show={drawerIsOpen} onClick={handleCloseDrawer}>
        <nav className='main-navigation__drawer-nav'>
          <NavLinks />
        </nav>
      </SideDrawer>
      <MainHeader>
        <button
          className='main-navigation__menu-btn'
          onClick={handleOpenDrawer}
        >
          <span />
          <span />
          <span />
        </button>
        <img
          src={logo}
          alt='logo'
          id='header-logo'
          height='45px'
          padding-left='20px'
          padding-top='15px'
        />
        <h1 className='main-navigation__title'>
          <Link to='/'>Locationsy</Link>
        </h1>
        <nav className='main-navigation__header-nav'>
          <NavLinks />
        </nav>
      </MainHeader>
    </Fragment>
  );
};

export default MainNavigation;
