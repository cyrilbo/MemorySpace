import { createStackNavigator } from '@react-navigation/stack';
import React, { FunctionComponent } from 'react';
import { TopicCardList } from '../../pages/TopicCardList/TopicCardList.page';
import { CardNavigatorRouteNames, CardNavigatorRouteParamsList } from './CardNavigator.routes';

const Stack = createStackNavigator<CardNavigatorRouteParamsList>();

export const CardNavigator: FunctionComponent = () => (
  <Stack.Navigator mode="modal" headerMode="none">
    <Stack.Screen name={CardNavigatorRouteNames.TopicCardList} component={TopicCardList} />
  </Stack.Navigator>
);
