import { useTheme } from '@core/theme/Theme.provider';
import { CardNavigator } from '@navigation/CardNavigator/CardNavigator.navigator';
import { Home } from '@pages/Home/Home.page';
import { createStackNavigator } from '@react-navigation/stack';
import React, { FunctionComponent } from 'react';
import { AppNavigatorRouteNames, AppNavigatorRouteParamsList } from './AppNavigator.routes';

const Stack = createStackNavigator<AppNavigatorRouteParamsList>();

export const AppNavigator: FunctionComponent = () => {
  const theme = useTheme();
  return (
    <>
      <Stack.Navigator
        initialRouteName={AppNavigatorRouteNames.Home}
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
          name={AppNavigatorRouteNames.Home}
          component={Home}
          options={{ headerTitle: 'Topics' }}
        />
        <Stack.Screen
          name={AppNavigatorRouteNames.CardNavigator}
          component={CardNavigator}
          options={{
            headerShown: false,
          }}
        />
      </Stack.Navigator>
    </>
  );
};
