import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React, { FunctionComponent } from 'react';
import { StatusBar } from 'react-native';
import { colors } from '../../core/theme/colors';
import { EditCardModal } from '../../pages/EditCardModal/EditCardModal.page';
import { SelectTopicModal } from '../../pages/SelectTopicModal/SelectTopicModal.page';
import { AppNavigator } from '../AppNavigator/AppNavigator.navigator';
import { RootNavigatorRouteNames, RootNavigatorRouteParamsList } from './RootNavigator.routes';

const Stack = createStackNavigator<RootNavigatorRouteParamsList>();

export const RootNavigator: FunctionComponent = () => (
  <NavigationContainer>
    <StatusBar barStyle="light-content" backgroundColor={colors.darkGrey} />
    <Stack.Navigator mode="modal" headerMode="none">
      <Stack.Screen name={RootNavigatorRouteNames.AppNavigator} component={AppNavigator} />
      <Stack.Screen name={RootNavigatorRouteNames.EditCardModal} component={EditCardModal} />
      <Stack.Screen name={RootNavigatorRouteNames.SelectTopicModal} component={SelectTopicModal} />
    </Stack.Navigator>
  </NavigationContainer>
);
