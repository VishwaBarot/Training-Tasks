/* eslint-disable react/jsx-one-expression-per-line */
import React, { useState } from 'react';
import '../styles/day8.css';
import { Alert } from 'react-bootstrap';

function Day8() {
  const [count, setCount] = useState(0);
  const [show, setShow] = useState(false);
  const increaseCount = () => {
    setCount(count + 1);
  };
  const decreaseCount = () => {
    if (count === 0) {
      setShow(true);
    } else {
      setCount(count - 1);
    }
  };

  return (
    <div className="main">
      {show && (
        <Alert variant="danger" onClose={() => setShow(false)} dismissible>
          <Alert.Heading>Negative values not allowed!!</Alert.Heading>
          <p>Please check the Value</p>
        </Alert>
      )}

      <div className="count">Counter : {count} </div>

      <div>
        <button
          className="click"
          type="button"
          onClick={increaseCount}
          variant="outline-primary"
          size="md"
        >
          Increment
        </button>

        <button
          className="click"
          type="button"
          onClick={decreaseCount}
          variant="outline-primary"
          size="md"
        >
          Decrement
        </button>

        <button
          className="click"
          type="button"
          onClick={() => setCount(0)}
          variant="outline-primary"
          size="md"
        >
          Reset
        </button>
      </div>
    </div>
  );
}
export default Day8;
