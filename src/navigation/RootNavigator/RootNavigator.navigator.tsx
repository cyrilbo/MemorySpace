import { useDarkMode, useTheme } from '@core/theme/Theme.provider';
import { AppNavigator } from '@navigation/AppNavigator/AppNavigator.navigator';
import {
  RootNavigatorRouteNames,
  RootNavigatorRouteParamsList,
} from '@navigation/RootNavigator/RootNavigator.routes';
import { CardEdition } from '@pages/CardEdition/CardEdition.page';
import { TopicSelection } from '@pages/TopicSelection/TopicSelection.page';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React, { FunctionComponent } from 'react';
import { StatusBar } from 'react-native';

const Stack = createStackNavigator<RootNavigatorRouteParamsList>();

export const RootNavigator: FunctionComponent = () => {
  const theme = useTheme();
  const { isLight } = useDarkMode();
  return (
    <NavigationContainer>
      <StatusBar
        barStyle={isLight ? 'dark-content' : 'light-content'}
        backgroundColor={theme.colors.secondary}
      />
      <Stack.Navigator
        mode="modal"
        screenOptions={{
          headerStyle: {
            backgroundColor: theme.colors.secondaryElevation,
            shadowColor: theme.colors.secondary,
          },
          headerTintColor: theme.colors.primary,
          headerTitleStyle: {
            fontFamily: theme.fontFamilies.bold,
            fontSize: theme.fontSizes.xxl,
          },
          headerBackTitleStyle: {
            fontFamily: theme.fontFamilies.bold,
            fontSize: theme.fontSizes.xl,
          },
          cardStyle: { backgroundColor: theme.colors.secondary },
        }}>
        <Stack.Screen
          name={RootNavigatorRouteNames.AppNavigator}
          component={AppNavigator}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name={RootNavigatorRouteNames.CardEdition}
          component={CardEdition}
          options={{ headerShown: true, headerLeft: null }}
        />
        <Stack.Screen
          name={RootNavigatorRouteNames.TopicSelection}
          component={TopicSelection}
          options={{ headerShown: true, headerTitle: 'Topic', headerLeft: null }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
