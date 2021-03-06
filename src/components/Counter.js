import React, { useState } from "react";
import PropTypes from "prop-types";

const Counter = ({ value }) => {
  const [counter, setCounter] = useState(value);

  const handleClick = () => {
    setCounter(counter + 1);
  };

  return (
    <>
      <h1>Counter</h1>
      <div>{counter}</div>
      <button onClick={handleClick}>Click me!</button>
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
