import { theme } from '@root/src/core/theme';
import { ThemeProvider } from '@root/src/core/theme/styled-components';
import { RootNavigator } from '@root/src/navigation/RootNavigator/RootNavigator.navigator';
import { TypeormProvider } from '@root/src/providers/Typeorm/Typeorm.provider';
import React, { FunctionComponent, useEffect } from 'react';
import { LogBox } from 'react-native';
import CodePush from 'react-native-code-push';

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
