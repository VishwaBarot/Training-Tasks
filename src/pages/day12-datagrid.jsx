import React, { useState } from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import { useNavigate } from 'react-router';
import Button from 'react-bootstrap/Button';

const SearchComponent = () => {
  const [input, setInput] = useState('');
  const navigate = useNavigate();
  const routeHandler = () => {
    navigate(`/${input}`);
  };

  return (
    <div>
      <label>Enter Value:</label>
      <input type="text" value={input} onInput={(e) => setInput(e.target.value)} />
      <Button variant="primary" size="sm" onClick={() => routeHandler()}>
        Submit
      </Button>
    </div>
  );
};
export default SearchComponent;
