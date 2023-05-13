import React from 'react';
import { Counter2Props } from './Counter2.types';

const Counter2: React.FC<Counter2Props> = ({
  count,
  handleIncrement,
  handleDecrement,
}) => {
  return (
    <div>
      <h1>Counter Two</h1>
      <p>{count}</p>
      {handleIncrement && <button onClick={handleIncrement}>Increment</button>}
      {handleDecrement && <button onClick={handleDecrement}>Decrement</button>}
    </div>
  );
};

export default Counter2;
