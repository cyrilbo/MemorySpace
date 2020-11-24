import { theme } from '@core/theme';
import { colors } from '@core/theme/colors';
import {
  CardNavigatorRouteNames,
  CardNavigatorRouteParamsList,
} from '@navigation/CardNavigator/CardNavigator.routes';
import { PlayCard } from '@pages/PlayCard/PlayCard.page';
import { TopicCardList } from '@pages/TopicCardList/TopicCardList.page';
import { createStackNavigator } from '@react-navigation/stack';
import React, { FunctionComponent } from 'react';

const Stack = createStackNavigator<CardNavigatorRouteParamsList>();

export const CardNavigator: FunctionComponent = () => (
  <Stack.Navigator
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
      name={CardNavigatorRouteNames.TopicCardList}
      component={TopicCardList}
      options={({ route }) => ({ headerTitle: route.params.topic.name })}
    />
    <Stack.Screen name={CardNavigatorRouteNames.PlayCard} component={PlayCard} />
  </Stack.Navigator>
);
