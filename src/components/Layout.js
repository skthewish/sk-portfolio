import React from 'react';
import { ThemeProvider } from '../utils/ThemeContext';

const Layout = ({ children }) => {
  return (
    <ThemeProvider>
      {children}
    </ThemeProvider>
  );
};

export default Layout;
