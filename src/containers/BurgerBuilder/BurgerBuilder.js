import React, { Component } from 'react';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls'
import Aux from '../../hoc/AuxWrapper'

class BurgerBuilder extends Component {
  state = {
    fixins: {
      'bread-top': 0,
      'lettuce': 0,
      'bacon': 0,
      'cheese': 0,
      'meat': 0,
      'bread-bottom': 0,
    }
  }
  

  render () {
    return (
      <Aux>
        <Burger fixins={this.state.fixins}/>
      
        <div>Build Controls</div>
        <BuildControls />
      </Aux>
    );
  }
}

export default BurgerBuilder;