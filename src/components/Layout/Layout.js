import React from 'react';
import Aux from '../../hoc/AuxWrapper';
import Toolbar from '../Navigation/Toolbar/Toolbar';
import './Layout.scss';

const layout = (props) => (
  <Aux>
    <Toolbar />
    <main className='Content'>
      {props.children}
    </main>
  </Aux>
);

export default layout