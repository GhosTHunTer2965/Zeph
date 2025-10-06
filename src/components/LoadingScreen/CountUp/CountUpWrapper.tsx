'use client';

import React from 'react'
import CountUp from './CountUp';

const CountUpWrapper = () => {
  return (
    <div>
      <CountUp
        from={0}
        to={100}
        separator=","
        direction="up"
        duration={1}
        className="count-up-text"
      />
    </div>
  );
}

export default CountUpWrapper
