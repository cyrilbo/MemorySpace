import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React, { FunctionComponent } from 'react';
import { StatusBar } from 'react-native';
import { colors } from '../../core/theme/colors';
import { CreateCardModal } from '../../pages/CreateCardModal/CreateCardModal.page';
import { Home } from '../../pages/Home/Home.page';
import { SelectTopicModal } from '../../pages/SelectTopicModal/SelectTopicModal.page';
import { RootNavigatorRouteNames, RootNavigatorRouteParamsList } from './RootNavigator.routes';

const Stack = createStackNavigator<RootNavigatorRouteParamsList>();

export const RootNavigator: FunctionComponent = () => (
  <NavigationContainer>
    <StatusBar barStyle="light-content" backgroundColor={colors.darkGrey} />
    <Stack.Navigator mode="modal" headerMode="none">
      <Stack.Screen name={RootNavigatorRouteNames.Home} component={Home} />
      <Stack.Screen name={RootNavigatorRouteNames.CreateCardModal} component={CreateCardModal} />
      <Stack.Screen name={RootNavigatorRouteNames.SelectTopicModal} component={SelectTopicModal} />
    </Stack.Navigator>
  </NavigationContainer>
);
