import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React, { FunctionComponent } from 'react';
import { Home } from '../../pages/Home/Home.page';
import { RootNavigatorRouteNames, RootNavigatorRouteParamsList } from './RootNavigator.routes';

const Stack = createStackNavigator<RootNavigatorRouteParamsList>();

export const RootNavigator: FunctionComponent = () => (
  <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen name={RootNavigatorRouteNames.Home} component={Home} />
    </Stack.Navigator>
  </NavigationContainer>
);
