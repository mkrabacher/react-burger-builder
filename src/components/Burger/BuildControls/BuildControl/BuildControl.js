import React from 'react';

import './BuildControl.scss';

const buildControl = (props) => (
  <div className='BuildControl'>
    <button className='Less'>Less</button>
    <div className='Label'>{props.label}</div>
    <button className='More'>More</button>
  </div>
);

export default buildControl;