import { createStackNavigator } from '@react-navigation/stack';
import React, { FunctionComponent } from 'react';
import { StatusBar } from 'react-native';
import { colors } from '../../core/theme/colors';
import { PlayCard } from '../../pages/PlayCard/PlayCard.page';
import { TopicCardList } from '../../pages/TopicCardList/TopicCardList.page';
import { CardNavigatorRouteNames, CardNavigatorRouteParamsList } from './CardNavigator.routes';

const Stack = createStackNavigator<CardNavigatorRouteParamsList>();

export const CardNavigator: FunctionComponent = () => (
  <>
    <StatusBar barStyle="dark-content" />
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: colors.darkGrey,
        },
        headerTintColor: colors.ivory,
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }}
    >
      <Stack.Screen
        name={CardNavigatorRouteNames.TopicCardList}
        component={TopicCardList}
        options={({ route }) => ({ headerTitle: route.params.topic.name })}
      />
      <Stack.Screen
        name={CardNavigatorRouteNames.PlayCard}
        component={PlayCard}
        options={({ route }) => ({ headerTitle: route.params.topic.name })}
      />
    </Stack.Navigator>
  </>
);
