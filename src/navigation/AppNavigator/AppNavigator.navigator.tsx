import { createStackNavigator } from '@react-navigation/stack';
import React, { FunctionComponent } from 'react';
import { Home } from '../../pages/Home/Home.page';
import { CardNavigator } from '../CardNavigator/CardNavigator.navigator';
import { AppNavigatorRouteNames, AppNavigatorRouteParamsList } from './AppNavigator.routes';

const Stack = createStackNavigator<AppNavigatorRouteParamsList>();

export const AppNavigator: FunctionComponent = () => (
  <Stack.Navigator headerMode="none" initialRouteName={AppNavigatorRouteNames.Home}>
    <Stack.Screen name={AppNavigatorRouteNames.Home} component={Home} />
    <Stack.Screen name={AppNavigatorRouteNames.CardNavigator} component={CardNavigator} />
  </Stack.Navigator>
);
