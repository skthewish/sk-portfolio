import React, { useState } from 'react';

const useTheme = () => {
  const [theme, setTheme] = useState(localStorage.getItem('theme'));
  return [theme, setTheme];
};

export default useTheme;
