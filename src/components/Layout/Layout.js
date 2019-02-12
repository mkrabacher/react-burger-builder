import React from 'react';
import Aux from '../../hoc/AuxWrapper';
import './Layout.scss';

const layout = (props) => (
  <Aux>
    <div>Toolbar, Sidedrawer, Backdrop</div>
    <main className='Content'>
      {props.children}
    </main>
  </Aux>
);

export default layout