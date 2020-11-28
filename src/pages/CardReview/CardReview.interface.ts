import { AppNavigatorRouteParamsList } from '@navigation/AppNavigator/AppNavigator.routes';
import {
  CardNavigatorRouteNames,
  CardNavigatorRouteParamsList,
} from '@navigation/CardNavigator/CardNavigator.routes';
import { RootNavigatorRouteParamsList } from '@navigation/RootNavigator/RootNavigator.routes';
import { CompositeNavigationProp, RouteProp } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';

export type CardReviewScreenNavigationProp = CompositeNavigationProp<
  CompositeNavigationProp<
    StackNavigationProp<CardNavigatorRouteParamsList, CardNavigatorRouteNames.CardReview>,
    StackNavigationProp<AppNavigatorRouteParamsList>
  >,
  StackNavigationProp<RootNavigatorRouteParamsList>
>;

export type CardReviewScreenRouteProp = RouteProp<
  CardNavigatorRouteParamsList,
  CardNavigatorRouteNames.CardReview
>;

export type CardReviewProps = {
  navigation: CardReviewScreenNavigationProp;
  route: CardReviewScreenRouteProp;
};
