import React from 'react';
import { ThemeProvider } from 'styled-components';
import { SafeAreaView, Text } from 'react-native';
import Camera from './components/Camera';
import Button from './components/Button';

import theme from './styles/theme';

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <SafeAreaView>
        {/* <Camera /> */}
        <Button variant="alert" size="small" title="start" />
      </SafeAreaView>
    </ThemeProvider>
  );
};

export default App;
