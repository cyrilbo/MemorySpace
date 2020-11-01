import React, { FunctionComponent } from 'react';
import { theme } from './src/core/theme';
import { ThemeProvider } from './src/core/theme/styled-components';
import { RootNavigator } from './src/navigation/RootNavigator/RootNavigator.navigator';
import { TypeormProvider } from './src/providers/Typeorm/Typeorm.provider';

const App: FunctionComponent = () => {
  return (
    <ThemeProvider theme={theme}>
      <TypeormProvider>
        <RootNavigator />
      </TypeormProvider>
    </ThemeProvider>
  );
};

export default App;
