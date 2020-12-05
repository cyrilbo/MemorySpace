import { useTheme } from '@core/theme/Theme.provider';
import {
  CardNavigatorRouteNames,
  CardNavigatorRouteParamsList,
} from '@navigation/CardNavigator/CardNavigator.routes';
import { CardReview } from '@pages/CardReview/CardReview.page';
import { TopicCardList } from '@pages/TopicCardList/TopicCardList.page';
import { createStackNavigator } from '@react-navigation/stack';
import React, { FunctionComponent } from 'react';

const Stack = createStackNavigator<CardNavigatorRouteParamsList>();

export const CardNavigator: FunctionComponent = () => {
  const theme = useTheme();
  return (
    <Stack.Navigator
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
        name={CardNavigatorRouteNames.TopicCardList}
        component={TopicCardList}
        options={({ route }) => ({ headerTitle: route.params.topic.name })}
      />
      <Stack.Screen name={CardNavigatorRouteNames.CardReview} component={CardReview} />
    </Stack.Navigator>
  );
};
