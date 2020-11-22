import { CardNavigator } from '@navigation/CardNavigator/CardNavigator.navigator';
import { Home } from '@pages/Home/Home.page';
import { createStackNavigator } from '@react-navigation/stack';
import React, { FunctionComponent } from 'react';
import { StatusBar } from 'react-native';
import { AppNavigatorRouteNames, AppNavigatorRouteParamsList } from './AppNavigator.routes';

const Stack = createStackNavigator<AppNavigatorRouteParamsList>();

export const AppNavigator: FunctionComponent = () => (
  <>
    <StatusBar barStyle="light-content" />
    <Stack.Navigator headerMode="none" initialRouteName={AppNavigatorRouteNames.Home}>
      <Stack.Screen name={AppNavigatorRouteNames.Home} component={Home} />
      <Stack.Screen name={AppNavigatorRouteNames.CardNavigator} component={CardNavigator} />
    </Stack.Navigator>
  </>
);
