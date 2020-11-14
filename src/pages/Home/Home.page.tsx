import { CompositeNavigationProp } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import React, { FunctionComponent } from 'react';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { RoundButton } from '../../core/components/RoundButton/RoundButton.component';
import styled from '../../core/theme/styled-components';
import { WideTopicList } from '../../modules/topic/components/WideTopicList/WideTopicList.component';
import { useGetTopicsQuery } from '../../modules/topic/data/hooks/useGetTopicsQuery.hook';
import { Topic } from '../../modules/topic/types/Topic.type';
import {
  AppNavigatorRouteNames,
  AppNavigatorRouteParamsList,
} from '../../navigation/AppNavigator/AppNavigator.routes';
import { CardNavigatorRouteNames } from '../../navigation/CardNavigator/CardNavigator.routes';
import {
  RootNavigatorRouteNames,
  RootNavigatorRouteParamsList,
} from '../../navigation/RootNavigator/RootNavigator.routes';

type HomeScreenNavigationProp = CompositeNavigationProp<
  StackNavigationProp<AppNavigatorRouteParamsList, AppNavigatorRouteNames.Home>,
  StackNavigationProp<RootNavigatorRouteParamsList>
>;

type Props = {
  navigation: HomeScreenNavigationProp;
};

export const Home: FunctionComponent<Props> = ({ navigation }) => {
  const openCreateCardModal = () => navigation.navigate(RootNavigatorRouteNames.EditCardModal);
  const openCardNavigator = (topic: Topic) =>
    navigation.navigate(AppNavigatorRouteNames.CardNavigator, {
      screen: CardNavigatorRouteNames.TopicCardList,
      params: { topic },
    });
  const insets = useSafeAreaInsets();
  const { topics } = useGetTopicsQuery();

  return (
    <Container paddingTop={insets.top} paddingBottom={insets.bottom}>
      <WideTopicList topics={topics} onTopicPress={(topic) => openCardNavigator(topic)} />
      <AddCardButtonContainer>
        <RoundButton onPress={openCreateCardModal} />
      </AddCardButtonContainer>
    </Container>
  );
};

const Container = styled.View<{ paddingTop: number; paddingBottom: number }>(
  ({ theme, paddingTop, paddingBottom }) => ({
    flex: 1,
    backgroundColor: theme.colors.darkGrey,
    paddingTop: Math.max(theme.gridUnit * 2, paddingTop),
    paddingBottom,
    paddingHorizontal: theme.gridUnit * 2,
  })
);

const AddCardButtonContainer = styled.View(({ theme }) => ({
  position: 'absolute',
  bottom: theme.gridUnit * 6,
  right: theme.gridUnit * 6,
}));
