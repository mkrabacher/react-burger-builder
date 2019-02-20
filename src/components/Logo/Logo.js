import React from 'react';
import './Logo.scss'
import BurgerLogo from '../../assets/images/burger-logo.png';

const logo = (props) => (
  <div className='Logo' style={{height: props.height}}>
    <img src={BurgerLogo} alt="Logo" />
  </div>
);

export default logo;