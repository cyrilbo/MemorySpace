import { colors } from '@core/theme/colors';
import { AppNavigator } from '@navigation/AppNavigator/AppNavigator.navigator';
import {
  RootNavigatorRouteNames,
  RootNavigatorRouteParamsList,
} from '@navigation/RootNavigator/RootNavigator.routes';
import { EditCardModal } from '@pages/EditCardModal/EditCardModal.page';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { theme } from '@root/src/core/theme';
import { SelectTopicModal } from '@root/src/pages/SelectTopicModal/SelectTopicModal.page';
import React, { FunctionComponent } from 'react';
import { StatusBar } from 'react-native';

const Stack = createStackNavigator<RootNavigatorRouteParamsList>();

export const RootNavigator: FunctionComponent = () => (
  <NavigationContainer>
    <StatusBar barStyle="light-content" backgroundColor={colors.darkGrey} />
    <Stack.Navigator
      mode="modal"
      headerMode="none"
      screenOptions={{ cardStyle: { backgroundColor: theme.colors.darkGrey } }}
    >
      <Stack.Screen name={RootNavigatorRouteNames.AppNavigator} component={AppNavigator} />
      <Stack.Screen name={RootNavigatorRouteNames.EditCardModal} component={EditCardModal} />
      <Stack.Screen name={RootNavigatorRouteNames.SelectTopicModal} component={SelectTopicModal} />
    </Stack.Navigator>
  </NavigationContainer>
);
