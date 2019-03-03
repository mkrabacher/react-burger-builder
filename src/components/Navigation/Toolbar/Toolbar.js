import React from 'react';
import './Toolbar.scss';
import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';

const toolbar = (props) => (
  <header className='Toolbar'>
    <div onClick={props.toggleSideDrawer}>Menu</div>
    <Logo height="80%" />
    <nav>
      <NavigationItems />
    </nav>
  </header>
);

export default toolbar;