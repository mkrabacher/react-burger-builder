import React, { Component } from 'react';
import Aux from '../../hoc/AuxWrapper';
import Toolbar from '../Navigation/Toolbar/Toolbar';
import './Layout.scss';
import SideDrawer from '../Navigation/SideDrawer/SideDrawer';

class Layout extends Component {
  state = {
    showSideDrawer: true
  }


  sideDrawerToggleHandler = () => {
    this.setState({showSideDrawer: !this.state.showSideDrawer})
  }

  render() {
    return (
      <Aux>
        <Toolbar toggleSideDrawer={this.sideDrawerToggleHandler}/>
        <SideDrawer open={this.state.showSideDrawer} closed={this.sideDrawerToggleHandler}/>
        <main className='Content'>
          {this.props.children}
        </main>
      </Aux>
    )
  }
}

export default Layout