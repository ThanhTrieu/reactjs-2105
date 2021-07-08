import React from 'react';
import { decrementCounter } from '../actions/index';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

const DecrementCounter = (props) => {
  return (
    <button type="text" onClick={() => props.clkDecrement(props.count)}> - </button>
  )
}

DecrementCounter.propTypes = {
  clkDecrement: PropTypes.func.isRequired,
  count: PropTypes.number
}

// lay state tu store sau se chuyen thanh props cua component
const mapStateToProps = state => ({
  count: state.counter.count
})

// chuyen action thanh props cua component
// clkDecrement la props co type la 1 function
const mapDispatchToProps = dispatch => ({
  clkDecrement: val => dispatch(decrementCounter(val))
});

const ConnectDecrementCounter = connect(mapStateToProps, mapDispatchToProps)(DecrementCounter);

export default React.memo(ConnectDecrementCounter);