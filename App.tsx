import { NavigationContainer } from '@react-navigation/native';
import React, { FunctionComponent } from 'react';
import { SafeAreaView, StatusBar, Text } from 'react-native';

const App: FunctionComponent = () => {
  return (
    <NavigationContainer>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <Text>MemorySpace</Text>
      </SafeAreaView>
    </NavigationContainer>
  );
};

export default App;
