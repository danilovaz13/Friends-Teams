import React from 'react';
import {Groups} from '@screens/Groups';
import {ThemeProvider} from 'styled-components';
import theme from './src/theme';

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Groups />
    </ThemeProvider>
  );
};

export default App;
