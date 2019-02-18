import React from 'react';
import Aux from '../../../hoc/AuxWrapper';

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
      <p>Contrinue to Checkout?</p>
      <p onClick={props.cancelOrder}>Cancel</p>
    </Aux>
  )
};

export default orderSummary;