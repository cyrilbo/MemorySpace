import {
  RootNavigatorRouteNames,
  RootNavigatorRouteParamsList,
} from '@navigation/RootNavigator/RootNavigator.routes';
import { RouteProp } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';

export type CardEditionScreenNavigationProp = StackNavigationProp<
  RootNavigatorRouteParamsList,
  RootNavigatorRouteNames.CardEdition
>;

export type CardEditionScreenRouteProp = RouteProp<
  RootNavigatorRouteParamsList,
  RootNavigatorRouteNames.CardEdition
>;

export type CardEditionProps = {
  navigation: CardEditionScreenNavigationProp;
  route: CardEditionScreenRouteProp;
};
