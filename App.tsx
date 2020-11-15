import React, { FunctionComponent, useEffect } from 'react';
import { LogBox } from 'react-native';
import { theme } from './src/core/theme';
import { ThemeProvider } from './src/core/theme/styled-components';
import { RootNavigator } from './src/navigation/RootNavigator/RootNavigator.navigator';
import { TypeormProvider } from './src/providers/Typeorm/Typeorm.provider';

const App: FunctionComponent = () => {
  useEffect(() => {
    LogBox.ignoreLogs(['Setting a timer']);
  }, []);
  return (
    <ThemeProvider theme={theme}>
      <TypeormProvider>
        <RootNavigator />
      </TypeormProvider>
    </ThemeProvider>
  );
};

export default App;
