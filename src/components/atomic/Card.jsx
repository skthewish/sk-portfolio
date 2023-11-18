import React from 'react';
import { Tilt } from 'react-tilt';

const Card = ({ className, children }) => {
  return (
    <Tilt className={className}>
      <div className='w-full h-full border border-slate-700 dark:border-slate-300 p-8 rounded-[20px] shadow-card dark:shadow-dark-card'>
        {children}
      </div>
    </Tilt>
  );
};

export default Card;
