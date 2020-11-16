import React, { FunctionComponent, useEffect } from 'react';
import { LogBox } from 'react-native';
import CodePush from 'react-native-code-push';
import { theme } from './src/core/theme';
import { ThemeProvider } from './src/core/theme/styled-components';
import { RootNavigator } from './src/navigation/RootNavigator/RootNavigator.navigator';
import { TypeormProvider } from './src/providers/Typeorm/Typeorm.provider';

const codePushOptions = { checkFrequency: CodePush.CheckFrequency.ON_APP_START };

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

export default CodePush(codePushOptions)(App);
