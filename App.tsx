import {StatusBar} from 'react-native';
import React from 'react';
import {NewGroup} from '@screens/NewGroup';
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
      <NewGroup />
    </ThemeProvider>
  );
};

export default App;
