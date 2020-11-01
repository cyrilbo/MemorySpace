import React, { FunctionComponent } from 'react';
import { RootNavigator } from './src/navigation/RootNavigator/RootNavigator.navigator';
import { TypeormProvider } from './src/providers/Typeorm/Typeorm.provider';

const App: FunctionComponent = () => {
  return (
    <TypeormProvider>
      <RootNavigator />
    </TypeormProvider>
  );
};

export default App;
