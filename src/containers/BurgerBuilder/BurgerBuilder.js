import React, { Component } from 'react';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls'
import Aux from '../../hoc/AuxWrapper'

const INGREDIENT_PRICES = {
  'bread-top': 0.5,
  'bread-bottom': 0.5,
  'lettuce': 0.3,
  'bacon': 1.5,
  'meat': 2.0,
  'cheese': 1.2,
}
class BurgerBuilder extends Component {
  state = {
    fixins: {
      'bread-top': 0,
      'lettuce': 0,
      'bacon': 0,
      'cheese': 0,
      'meat': 0,
      'bread-bottom': 0,
    },
    totalPrice: 0
  }

  addFixinHandler = (type) => {
    const oldCount = this.state.fixins[type];
    const updatedCount = oldCount + 1;
    const updatedFixins = {
      ...this.state.fixins
    }
    updatedFixins[type] = updatedCount;
    
    const priceAddition = INGREDIENT_PRICES[type];
    console.log('priceAddition: ', priceAddition)
    const oldPrice = this.state.totalPrice;
    console.log('oldPrice: ', oldPrice)
    const newPrice = oldPrice + priceAddition;
    console.log('newpirrce: ', newPrice)

    this.setState({fixins: updatedFixins, totalPrice: newPrice});
  }
  
  removeFixinHandler = (type) => {
    const oldCount = this.state.fixins[type];
    const updatedCount = oldCount - 1;
    const updatedFixins = {
      ...this.state.fixins
    }
    updatedFixins[type] = updatedCount;
    
    const priceDeduction = INGREDIENT_PRICES[type];
    const oldPrice = this.state.totalPrice;
    const newPrice = oldPrice - priceDeduction;
    console.log('newpirrce: ', newPrice)

    this.setState({fixins: updatedFixins, totalPrice: newPrice});    
  }
  

  render () {
    return (
      <Aux>
        <Burger fixins={this.state.fixins}/>
        <h3>{this.state.totalPrice}</h3>
        <div>Build Controls</div>
        <BuildControls
          addFixinHandler={this.addFixinHandler}
          removeFixinHandler={this.removeFixinHandler}/>
      </Aux>
    );
  }
}

export default BurgerBuilder;