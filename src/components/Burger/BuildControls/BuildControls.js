import React from 'react';
import BuildControl from './BuildControl/BuildControl'
import './BuildControls.scss'

const controls = [
  { label: 'Top Bun', type: 'bread-top' },
  { label: 'Lettuce', type: 'lettuce' },
  { label: 'Bacon', type: 'bacon' },
  { label: 'Cheese', type: 'cheese' },
  { label: 'Meat', type: 'meat' },
  { label: 'Bottom Bun', type: 'bread-bottom' },
]

const buildControls = (props) => (
  <div className='BuildControls'>
    <h3>Burger Price: {props.price}</h3>

    {controls.map(fixin => {
      return <BuildControl
        disabled={props.disabledInfo[fixin.type]}
        more={() => props.addFixinHandler(fixin.type)}
        less={() => props.removeFixinHandler(fixin.type)}
        type={fixin.type}
        key={fixin.label}
        label={fixin.label} />
    })}
    <button disabled={!props.purchasable} className='OrderButton'>Order Now</button>
  </div>

)

export default buildControls;