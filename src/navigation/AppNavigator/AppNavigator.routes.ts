import { NavigatorScreenParams } from '@react-navigation/native';
import { CardNavigatorRouteParamsList } from '../CardNavigator/CardNavigator.routes';

export enum AppNavigatorRouteNames {
  Home = 'Home',
  CardNavigator = 'CardNavigator',
}

export type AppNavigatorRouteParamsList = {
  Home: undefined;
  CardNavigator: NavigatorScreenParams<CardNavigatorRouteParamsList>;
};
