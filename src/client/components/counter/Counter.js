import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import * as counterActions from '../../actions/counter-actions';

class Counter extends Component {
  render() {
    console.log(this.props);
    const { count } = this.props;

    return (
      <div className='counter'>
        <div className='counter__count'>
          { count }
        </div>
        Counter
      </div>
    );
  }
}

Counter.propTypes = {
  count: PropTypes.number
};

const mapStateToProps = state => {
  return state.counter;
};

export default connect(mapStateToProps, counterActions)(Counter);
