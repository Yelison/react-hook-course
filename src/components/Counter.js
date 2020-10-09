import React from "react";
import PropTypes from "prop-types";

const Counter = ({ value }) => {
  return (
    <>
      <h1>Counter</h1>
      <div>{value}</div>
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
