import React, { Component } from 'react';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';
import Aux from '../../hoc/AuxWrapper';
import Modal from '../../components/UI/Modal/Modal';
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary';
import axiosInstance from '../../axios';

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
    totalPrice: 0,
    purchasable: false,
    purchaseMode: false,
  }

  updatePurchaseState(fixins) {
    let totalFixins = 0;
    for(let key in fixins) {
      totalFixins += fixins[key]
    }
    this.setState({ purchasable: totalFixins > 0});
  }

  purchaseHandler = () => {
    this.setState({purchaseMode : this.state.purchaseMode ? false : true});
  }

  purchaseContinueHandler = () => {
    const burger = {
      fixins: this.state.fixins,
      totalPrice: this.state.totalPrice,
    }
    axiosInstance.post('/orders.json', burger)
      .then(response => console.log(response))
      .catch(error => console.error('Matt, You caught one: ', error));
    this.setState({purchaseMode : false});
  }

  purchaseCancelHandler = () => {
    this.setState({ purchaseMode: false });
  }

  addFixinHandler = (type) => {
    const oldCount = this.state.fixins[type];
    const updatedCount = oldCount + 1;
    const updatedFixins = {
      ...this.state.fixins
    }
    updatedFixins[type] = updatedCount;
    
    const priceAddition = INGREDIENT_PRICES[type];
    const oldPrice = this.state.totalPrice;
    const newPrice = oldPrice + priceAddition;

    this.setState({fixins: updatedFixins, totalPrice: newPrice, purchasable: true});
  }
  
  removeFixinHandler = (type) => {
    const oldCount = this.state.fixins[type];
    if (oldCount <= 0 ) {
      return;
    }
    const updatedCount = oldCount - 1;
    const updatedFixins = {
      ...this.state.fixins
    }
    updatedFixins[type] = updatedCount;
    
    const priceDeduction = INGREDIENT_PRICES[type];
    const oldPrice = this.state.totalPrice;
    const newPrice = oldPrice - priceDeduction;
    
    this.setState({fixins: updatedFixins, totalPrice: newPrice});
    this.updatePurchaseState(updatedFixins)
  }
  

  render () {
    const disabledInfo = {
      ...this.state.fixins
    }
    for (let key in disabledInfo) {
       disabledInfo[key] = this.state.fixins[key] > 0 ? false : true;
    }
    return (
      <Aux>
        <Modal show={this.state.purchaseMode} modalClosed={this.purchaseCancelHandler}>
          <OrderSummary
            checkout={null}
            purchaseCancel={this.purchaseCancelHandler}
            purchaseContinue={this.purchaseContinueHandler}
            price={this.state.totalPrice}
            fixins={this.state.fixins} />
        </Modal>
        <Burger fixins={this.state.fixins}/>
        <BuildControls 
          purchasable={this.state.purchasable}
          purchaseHandler={this.purchaseHandler}
          price={this.state.totalPrice}
          disabledInfo={disabledInfo}
          addFixinHandler={this.addFixinHandler}
          removeFixinHandler={this.removeFixinHandler}/>
      </Aux>
    );
  }
}

export default BurgerBuilder;