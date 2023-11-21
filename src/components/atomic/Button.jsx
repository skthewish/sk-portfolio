import React from 'react';

const IconButton = ({ className, onClick, children }) => {
  return (
    <button className={`bg-background rounded-full shadow-sm grid items-center ${className}`} onClick={onClick}>
      {children}
    </button>
  );
};

export default IconButton;
