import { CompositeNavigationProp } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import React, { FunctionComponent } from 'react';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { RoundButton } from '../../core/components/RoundButton/RoundButton.component';
import styled from '../../core/theme/styled-components';
import { PlayButton } from '../../modules/srs/components/PlayButton/PlayButton.component';
import { WideTopicList } from '../../modules/topic/components/WideTopicList/WideTopicList.component';
import { useGetTopicsQuery } from '../../modules/topic/data/hooks/useGetTopicsQuery.hook';
import {
  AppNavigatorRouteNames,
  AppNavigatorRouteParamsList,
} from '../../navigation/AppNavigator/AppNavigator.routes';
import { RootNavigatorRouteParamsList } from '../../navigation/RootNavigator/RootNavigator.routes';
import { useHomeNavigation } from './Home.hooks';

export type HomeScreenNavigationProp = CompositeNavigationProp<
  StackNavigationProp<AppNavigatorRouteParamsList, AppNavigatorRouteNames.Home>,
  StackNavigationProp<RootNavigatorRouteParamsList>
>;

type Props = {
  navigation: HomeScreenNavigationProp;
};

export const Home: FunctionComponent<Props> = ({ navigation }) => {
  const { openEditCardModal, openPlayCardScreen, openTopicCardListScreen } = useHomeNavigation(
    navigation
  );
  const insets = useSafeAreaInsets();
  const { topics } = useGetTopicsQuery();

  return (
    <Container paddingTop={insets.top} paddingBottom={insets.bottom}>
      <PlayButtonContainer>
        <PlayButton onPress={openPlayCardScreen} size={40} />
      </PlayButtonContainer>

      <WideTopicList topics={topics} onTopicPress={(topic) => openTopicCardListScreen(topic)} />
      <AddCardButtonContainer>
        <RoundButton onPress={openEditCardModal} />
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

const PlayButtonContainer = styled.View(({ theme }) => ({
  alignItems: 'center',
  justifyContent: 'center',
  marginBottom: theme.gridUnit * 4,
}));

const AddCardButtonContainer = styled.View(({ theme }) => ({
  position: 'absolute',
  bottom: theme.gridUnit * 6,
  right: theme.gridUnit * 6,
}));
