import React from 'react';
import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import './SideDrawer.scss';

const sideDrawer = (props) => {

  return (
    <div className='SideDrawer'>
      <Logo height='6%' />
      <nav>
        <NavigationItems />
      </nav>
    </div>
  );
};

export default sideDrawer;