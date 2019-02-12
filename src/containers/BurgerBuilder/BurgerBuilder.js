import React, { Component } from 'react';
import Burger from '../../components/Burger/Burger';
import Aux from '../../hoc/AuxWrapper'

class BurgerBuilder extends Component {
  state = {
    fixins: {
      'bread-top': 2,
      'lettuce': 2,
      'bacon': 3,
      'cheese': 7,
      'meat': 0,
      'bread-bottom': 1,
    }
  }
  

  render () {
    return (
      <Aux>
        <Burger fixins={this.state.fixins}/>
      
        <div>Build Controls</div>
      </Aux>
    );
  }
}

export default BurgerBuilder;