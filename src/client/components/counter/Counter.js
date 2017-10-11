import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import * as counterActions from '../../actions/counter-actions';

class Counter extends Component {
  constructor() {
    super();

    this.increment = this.increment.bind(this);
    this.decrement = this.decrement.bind(this);
  }

  increment() {
    const { counterIncrement } = this.props;
    counterIncrement();
  }

  decrement() {
    const { counterDecrement } = this.props;
    counterDecrement();
  }

  render() {
    console.log(this.props);
    const { count } = this.props;

    return (
      <div className='counter'>
        <h2 className='counter__title'>Counter</h2>
        <div className='counter__count'>
          { count }
        </div>
        <button onClick={this.increment} type='button'>Increment</button>
        <button onClick={this.decrement} type='button'>Decrement</button>
      </div>
    );
  }
}

Counter.propTypes = {
  count: PropTypes.number,
  counterIncrement: PropTypes.func,
  counterDecrement: PropTypes.func
};

const mapStateToProps = state => {
  return state.counter;
};

export default connect(mapStateToProps, counterActions)(Counter);
