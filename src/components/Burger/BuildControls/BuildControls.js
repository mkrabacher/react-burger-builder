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
    {controls.map(fixin => {
      return <BuildControl
        more={() => props.addFixinHandler(fixin.type)}
        less={() => props.removeFixinHandler(fixin.type)}
        type={fixin.type}
        key={fixin.label}
        label={fixin.label} />
    })}
  </div>

)

export default buildControls;