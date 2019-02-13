import React, { Component } from 'react';
import Burger from '../../components/Burger/Burger';
import Controls from '../../components/Controls/Controls'

import Aux from '../../hoc/AuxWrapper'

class BurgerBuilder extends Component {
  state = {
    fixins: {
      'bread-top': 1,
      'lettuce': 2,
      'bacon': 3,
      'cheese': 1,
      'meat': 2,
      'bread-bottom': 1,
    }
  }

  updateFixinHander(event) {
    const dir = event.target.value;
    const fixinKey = event.target.attributes[1].value;

    let fixins;
    switch (fixinKey + dir) {
      case ('bread-bottom-up'):
        fixins = { ...this.state.fixins };
        fixins['bread-bottom']++;
        this.setState({ fixins: fixins })
        break;
      case ('bread-top-up'):
        fixins = {...this.state.fixins};
        fixins['bread-top']++;
        this.setState({ fixins: fixins })
        break;
      case ('lettuce-up'):
        fixins = {...this.state.fixins};
        fixins['lettuce']++;
        this.setState({ fixins: fixins })
        break;
      case ('bacon-up'):
        fixins = {...this.state.fixins};
        fixins['bacon']++;
        this.setState({ fixins: fixins })
        break;
      case ('cheese-up'):
        fixins = {...this.state.fixins};
        fixins['cheese']++;
        this.setState({ fixins: fixins })
        break;
      case ('meat-up'):
        fixins = {...this.state.fixins};
        fixins['meat']++;
        this.setState({ fixins: fixins })
        break;
      case ('bread-bottom-down'):
        fixins = { ...this.state.fixins };
        fixins['bread-bottom']--;
        this.setState({ fixins: fixins })
        break;
      case ('bread-top-down'):
        fixins = {...this.state.fixins};
        fixins['bread-top']--;
        this.setState({ fixins: fixins })
        break;
      case ('lettuce-down'):
        fixins = {...this.state.fixins};
        fixins['lettuce']--;
        this.setState({ fixins: fixins })
        break;
      case ('bacon-down'):
        fixins = {...this.state.fixins};
        fixins['bacon']--;
        this.setState({ fixins: fixins })
        break;
      case ('cheese-down'):
        fixins = {...this.state.fixins};
        fixins['cheese']--;
        this.setState({ fixins: fixins })
        break;
      case ('meat-down'):
        fixins = {...this.state.fixins};
        fixins['meat']--;
        this.setState({ fixins: fixins })
        break;
      default:
        return null;
    }
  }


  render() {
    return (
      <Aux>
        <Burger fixins={this.state.fixins}/>

        <Controls fixins={this.state.fixins} fixinHandler={(event) => this.updateFixinHander(event)} />
      </Aux>
    );
  }
}

export default BurgerBuilder;