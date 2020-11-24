import { RoundButton } from '@core/components/RoundButton/RoundButton.component';
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
  const { openEditCardModal, openPlayCardScreen, openTopicCardListScreen } = useHomeNavigation(
    navigation
  );
  const insets = useSafeAreaInsets();
  const { topics } = useGetTopicsQuery();

  useEffect(() => {
    RNBootSplash.hide({ fade: true });
  }, []);

  return (
    <Container paddingTop={insets.top} paddingBottom={insets.bottom}>
      {topics.length > 0 ? (
        <PlayButtonContainer>
          <HugePlayButton onPress={openPlayCardScreen} size={50} />
        </PlayButtonContainer>
      ) : null}

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
    paddingTop: Math.max(theme.gridUnit * 4, paddingTop),
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
