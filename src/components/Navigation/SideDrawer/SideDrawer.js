import React from 'react';
import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import './SideDrawer.scss';
import Backdrop from '../../UI/Backdrop/Backdrop';
import Aux from '../../../hoc/AuxWrapper';

const sideDrawer = (props) => {
  let display = props.open ? 'Open' : 'Close';
  return (
    <Aux>
      <Backdrop  show={props.open} clicked={props.closed}/>
      <div className={'SideDrawer ' + display}>
        <Logo height='6%' />
        <nav style={{'marginTop': '20px'}}>
          <NavigationItems />
        </nav>
      </div>
    </Aux>
  );
};

export default sideDrawer;