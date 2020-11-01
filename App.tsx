import React, { FunctionComponent } from 'react';
import { SafeAreaView, StatusBar, Text } from 'react-native';

const App: FunctionComponent = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <Text>MemorySpace</Text>
      </SafeAreaView>
    </>
  );
};

export default App;
