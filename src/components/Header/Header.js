import React, { useState } from 'react';

const Header = (props) => {
  const {count, setCount} = props;
  return (
    <div>
      <h1>This is Header: {count}</h1>
      <button onClick={() => setCount(count + 1)}>Increase</button>
    </div>
  );
};

export default Header;