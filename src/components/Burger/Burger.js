import React from 'react';
import BurgerIngrediant from './BurgerIngrediant/BurgerIngrediant';

import './Burger.scss'

const burger = (props) => {
  return (
    <div className="Burger">
      <BurgerIngrediant type="bread-top"/>
      <BurgerIngrediant type="lettuce"/>
      <BurgerIngrediant type="bacon"/>
      <BurgerIngrediant type="cheese"/>
      <BurgerIngrediant type="meat"/>
      <BurgerIngrediant type="bread-bottom"/>
    </div>
  );
}

export default burger;