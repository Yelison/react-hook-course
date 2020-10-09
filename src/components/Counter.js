import React from "react";
import PropTypes from "prop-types";

const Counter = ({ value }) => {
  const handleClick = () => {
    console.log("+1");
  };

  return (
    <>
      <h1>Counter</h1>
      <div>{ value }</div>
      <button onClick={ handleClick }>Click me!</button>
    </>
  );
};

Counter.propTypes = {
  value: PropTypes.number,
};

Counter.defaultProps = {
  value: 0,
};

export default Counter;
