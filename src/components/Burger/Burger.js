import React from 'react';
import BurgerIngrediant from './BurgerIngrediant/BurgerIngrediant';

import './Burger.scss'

const burger = (props) => {

  let fixins = [];
  fixins = Object.keys(props.fixins).map(fixinKey => {
    return [...Array(props.fixins[fixinKey])].map((_, i) => {
      return <BurgerIngrediant key={fixinKey + i} type={fixinKey} />;
    })
  });
  fixins = fixins.reduce((arr, el) => {
    return arr.concat(el)
  }, []);
  
  if (fixins.length === 0) {
    fixins = <p>Let's make a burger</p>
  }


  return (
    <div className="Burger">
      {fixins}
    </div>
  );
}

export default burger;