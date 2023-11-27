import {StatusBar} from 'react-native';
import React from 'react';
import {Players} from '@screens/Players';
import {ThemeProvider} from 'styled-components';
import theme from './src/theme';

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />
      <Players />
    </ThemeProvider>
  );
};

export default App;
