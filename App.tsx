import { ThemeProvider } from '@root/src/core/theme/Theme.provider';
import { RootNavigator } from '@root/src/navigation/RootNavigator/RootNavigator.navigator';
import { TypeormProvider } from '@root/src/providers/Typeorm/Typeorm.provider';
import React, { FunctionComponent, useEffect } from 'react';
import { LogBox } from 'react-native';
import { AppearanceProvider } from 'react-native-appearance';
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
    <AppearanceProvider>
      <ThemeProvider>
        <ReactQueryProvider>
          <TypeormProvider>
            <RootNavigator />
          </TypeormProvider>
        </ReactQueryProvider>
      </ThemeProvider>
    </AppearanceProvider>
  );
};

export default CodePush(codePushOptions)(App);
