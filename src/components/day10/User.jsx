import React from 'react';
import { useSearchParams } from 'react-router-dom';

export default function User() {
  const [searchParams] = useSearchParams();
  // eslint-disable-next-line prefer-const
  let array = [];
  for (const [key, value] of searchParams.entries()) {
    array.push(
      <h5 key={key}>
        {' '}
        {key} : {value}
      </h5>,
    );
  }

  return <div> {array} </div>;
}
