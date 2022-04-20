import React, { useEffect, useState } from 'react';
import Desktop from '../components/Day7/Desktop';
import Landscape from '../components/Day7/Landscape';
import Tablet from '../components/Day7/Tablet';
import Mobile from '../components/Day7/Mobile';

import '../styles/day7.css';

const Day7 = () => {
  const [width, setWidth] = useState(window.innerWidth);
  const [height, setHeight] = useState(window.innerHeight);

  const updateWidthAndHeight = () => {
    setWidth(window.innerWidth);
    setHeight(window.innerHeight);
  };

  useEffect(() => {
    window.addEventListener('resize', updateWidthAndHeight);
    return () => window.removeEventListener('resize', updateWidthAndHeight);
  }, [width]);

  return (
    <div>
      <div className="hw">
        {`Width :-  ${width}`}
        {' '}
        <br />
        {`Height :-  ${height}`}
      </div>
      <div>
        {width >= 1024 && <Desktop />}
        {width < 1024 && width >= 768 && <Tablet />}
        {width < 768 && width >= 550 && <Landscape />}
        {width < 550 && <Mobile />}
      </div>
    </div>
  );
};

export default Day7;
