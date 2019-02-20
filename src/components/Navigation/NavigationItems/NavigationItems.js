import React from 'react';
import NavigationItem from './NavigationItem/NavigationItem';
import './NavigationItems.scss';

const navigationItems = () => (
  <ul className="NavigationItems">
      <NavigationItem link='i am the link' active={true}>Hullo?</NavigationItem>
      <NavigationItem link='i am the link' >inactive?</NavigationItem>
  </ul>
);

export default navigationItems;