import React from 'react';
import BurgerIngrediant from './BurgerIngrediant/BurgerIngrediant';

import './Burger.scss'

const burger = (props) => {

  let fixins = [];
  fixins = Object.keys(props.fixins).map(fixinKey => {
   return  [...Array(props.fixins[fixinKey])].map((_, i) => {
      return <BurgerIngrediant key={fixinKey + i} type={fixinKey}/>;
    })
    
  });

  return (
    <div className="Burger">
      {fixins}
    </div>
  );
}

export default burger;