import React from 'react';
import ThemeProvider from './ThemeProvider';
import App from './App';

function Root() {
  const theme = {};

  return (
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  );
}

export default Root;
