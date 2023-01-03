import React from 'react';
import { ThemeProvider } from 'styled-components';
import { SafeAreaView, Text } from 'react-native';

import theme from './styles/theme';

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <SafeAreaView>
        <Text>Hello World!</Text>
      </SafeAreaView>
    </ThemeProvider>
  );
};

export default App;
