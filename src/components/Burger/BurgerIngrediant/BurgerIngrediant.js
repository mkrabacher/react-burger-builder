import React from 'react';
import './BurgerIngrediant.scss'


const burgerIngrediant = (props) => {
  let ingrediant = null; 

  switch (props.type) {
    case ('bread-bottom'):
      ingrediant = <div className={'BreadBottom'}></div>
      break;
    case ('bread-top'):
      ingrediant = (
        <div className={'BreadTop'}>
          <div className="Seeds1"></div>
          <div className="Seeds2"></div>
        </div>
      );
      break;
    case ('meat'):
      ingrediant = <div className={'Meat'}></div>
      break;
    case ('cheese'):
      ingrediant = <div className={'Cheese'}></div>
      break;
    case ('lettuce'):
      ingrediant = <div className={'Lettuce'}></div>
      break;
    case ('bacon'):
      ingrediant = <div className={'Bacon'}></div>
      break;
    default:
        ingrediant = null;
  }

    return ingrediant;
}

export default burgerIngrediant;