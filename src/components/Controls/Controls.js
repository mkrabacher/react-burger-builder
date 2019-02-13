import React, { Component } from 'react';

class Control extends Component {
  ingrediant = this.props.ingrediant;
  amount = this.props.amount;

  render() {

    return Object.keys(this.props.fixins).map((fixinKey, idx) => {
      return (
        <div key={idx}>
          <button value='-up' ingrediant={fixinKey} onClick={this.props.fixinHandler}>+</button>
          <h4>{fixinKey} - {this.props.fixins[fixinKey]}</h4>
          <button value='-down' ingrediant={fixinKey} onClick={this.props.fixinHandler}>-</button>
        </div>
      );
    });
  }
}

export default Control;