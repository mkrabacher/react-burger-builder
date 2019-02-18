import React from 'react';
import Aux from '../../../hoc/AuxWrapper';
import Button from '../../UI/Button/Button';

const orderSummary = (props) => {
  const fixins = Object.keys(props.fixins)
    .map(key => {
      return <li key={key}><span stlye={{textTransform: 'capitalize'}}>{key}</span>: {props.fixins[key]}</li>
    })

  return (
    <Aux>
      <h3>Your Order</h3>
      <ul>
        {fixins}
      </ul>

      <h5>Price: {props.price}</h5>
      <Button btnType="Danger" clicked={props.purchaseContinue}>Contrinue to Checkout?</Button>
      <Button btnType="Success" clicked={props.purchaseCancel}>Cancel</Button>
    </Aux>
  )
};

export default orderSummary;