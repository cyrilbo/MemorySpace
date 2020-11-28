import { theme } from '@root/src/core/theme';
import { ThemeProvider } from '@root/src/core/theme/styled-components';
import { RootNavigator } from '@root/src/navigation/RootNavigator/RootNavigator.navigator';
import { TypeormProvider } from '@root/src/providers/Typeorm/Typeorm.provider';
import React, { FunctionComponent, useEffect } from 'react';
import { LogBox } from 'react-native';
import CodePush from 'react-native-code-push';
import Orientation from 'react-native-orientation-locker';
import { ReactQueryProvider } from './src/providers/ReactQuery/ReactQuery.provider';

const codePushOptions = { checkFrequency: CodePush.CheckFrequency.ON_APP_START };

const App: FunctionComponent = () => {
  useEffect(() => {
    LogBox.ignoreLogs(['Setting a timer']);
    Orientation.lockToPortrait();
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <ReactQueryProvider>
        <TypeormProvider>
          <RootNavigator />
        </TypeormProvider>
      </ReactQueryProvider>
    </ThemeProvider>
  );
};

export default CodePush(codePushOptions)(App);
