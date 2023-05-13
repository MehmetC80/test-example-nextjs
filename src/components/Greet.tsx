import React from 'react';

interface GreetProps {
  name?: string;
}

const Greet: React.FC<GreetProps> = ({ name }) => {
  return <div>Hello {name}</div>;
};

export default Greet;
