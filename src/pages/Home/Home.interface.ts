import {
  AppNavigatorRouteNames,
  AppNavigatorRouteParamsList,
} from '@navigation/AppNavigator/AppNavigator.routes';
import { RootNavigatorRouteParamsList } from '@navigation/RootNavigator/RootNavigator.routes';
import { CompositeNavigationProp } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';

export type HomeScreenNavigationProp = CompositeNavigationProp<
  StackNavigationProp<AppNavigatorRouteParamsList, AppNavigatorRouteNames.Home>,
  StackNavigationProp<RootNavigatorRouteParamsList>
>;

export type HomeProps = {
  navigation: HomeScreenNavigationProp;
};
