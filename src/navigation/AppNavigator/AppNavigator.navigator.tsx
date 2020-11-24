import { theme } from '@core/theme';
import { colors } from '@core/theme/colors';
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
    <Stack.Navigator
      initialRouteName={AppNavigatorRouteNames.Home}
      screenOptions={{
        headerStyle: {
          backgroundColor: colors.raisinBlack,
          shadowColor: colors.black,
        },
        headerTintColor: colors.ivory,
        headerTitleStyle: {
          fontFamily: theme.fontFamilies.bold,
          fontSize: theme.fontSizes.xxl,
        },
        headerBackTitleStyle: {
          fontFamily: theme.fontFamilies.bold,
          fontSize: theme.fontSizes.xl,
        },
        cardStyle: { backgroundColor: theme.colors.darkGrey },
      }}
    >
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
