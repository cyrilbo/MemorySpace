import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React, { FunctionComponent } from 'react';
import { CreateCardModal } from '../../pages/CreateCardModal/CreateCardModal.page';
import { Home } from '../../pages/Home/Home.page';
import { RootNavigatorRouteNames, RootNavigatorRouteParamsList } from './RootNavigator.routes';

const Stack = createStackNavigator<RootNavigatorRouteParamsList>();

export const RootNavigator: FunctionComponent = () => (
  <NavigationContainer>
    <Stack.Navigator mode="modal" headerMode="none">
      <Stack.Screen name={RootNavigatorRouteNames.Home} component={Home} />
      <Stack.Screen name={RootNavigatorRouteNames.CreateCardModal} component={CreateCardModal} />
    </Stack.Navigator>
  </NavigationContainer>
);
