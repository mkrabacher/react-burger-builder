import React from 'react';

import './BuildControl.scss';

const buildControl = (props) => (
  <div className='BuildControl'>
    <button className='Less' onClick={props.less}>Less</button>
    <div className='Label'>{props.label}</div>
    <button className='More' onClick={props.more}>More</button>
  </div>
);

export default buildControl;