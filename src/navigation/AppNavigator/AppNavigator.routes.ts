import { CardNavigatorRouteParamsList } from '@navigation/CardNavigator/CardNavigator.routes';
import { NavigatorScreenParams } from '@react-navigation/native';

export enum AppNavigatorRouteNames {
  Home = 'Home',
  CardNavigator = 'CardNavigator',
}

export type AppNavigatorRouteParamsList = {
  Home: undefined;
  CardNavigator: NavigatorScreenParams<CardNavigatorRouteParamsList>;
};
