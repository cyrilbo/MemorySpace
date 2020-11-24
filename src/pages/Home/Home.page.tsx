import { useOpenEditCardModalButton } from '@card/hooks/useEditCardModalButton.hook';
import styled from '@core/theme/styled-components';
import {
  AppNavigatorRouteNames,
  AppNavigatorRouteParamsList,
} from '@navigation/AppNavigator/AppNavigator.routes';
import { RootNavigatorRouteParamsList } from '@navigation/RootNavigator/RootNavigator.routes';
import { useHomeNavigation } from '@pages/Home/Home.hooks';
import { CompositeNavigationProp } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { HugePlayButton } from '@srs/components/HugePlayButton/HugePlayButton.component';
import { WideTopicList } from '@topic/components/WideTopicList/WideTopicList.component';
import { useGetTopicsQuery } from '@topic/data/hooks/useGetTopicsQuery.hook';
import React, { FunctionComponent, useEffect } from 'react';
import RNBootSplash from 'react-native-bootsplash';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

export type HomeScreenNavigationProp = CompositeNavigationProp<
  StackNavigationProp<AppNavigatorRouteParamsList, AppNavigatorRouteNames.Home>,
  StackNavigationProp<RootNavigatorRouteParamsList>
>;

type Props = {
  navigation: HomeScreenNavigationProp;
};

export const Home: FunctionComponent<Props> = ({ navigation }) => {
  const { openEditCardModal, openTopicCardListScreen, openPlayCardScreen } = useHomeNavigation(
    navigation
  );
  const insets = useSafeAreaInsets();
  const { topics } = useGetTopicsQuery();
  useOpenEditCardModalButton(navigation, openEditCardModal);

  useEffect(() => {
    RNBootSplash.hide({ fade: true });
  }, []);

  return (
    <Container paddingBottom={insets.bottom}>
      <WideTopicList topics={topics} onTopicPress={(topic) => openTopicCardListScreen(topic)} />
      {topics.length > 0 ? (
        <PlayButtonContainer>
          <HugePlayButton onPress={openPlayCardScreen} />
        </PlayButtonContainer>
      ) : null}
    </Container>
  );
};

const Container = styled.View<{ paddingBottom: number }>(({ theme, paddingBottom }) => ({
  flex: 1,
  backgroundColor: theme.colors.darkGrey,
  paddingBottom,
}));

const PlayButtonContainer = styled.View(({ theme }) => ({
  position: 'absolute',
  bottom: theme.gridUnit * 6,
  right: theme.gridUnit * 10,
  left: theme.gridUnit * 10,
}));
