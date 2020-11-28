import { useOpenEditCardModalButton } from '@card/hooks/useEditCardModalButton.hook';
import styled from '@core/theme/styled-components';
import { useHomeNavigation } from '@pages/Home/Home.hooks';
import { HugePlayButton } from '@srs/components/HugePlayButton/HugePlayButton.component';
import { WideTopicList } from '@topic/components/WideTopicList/WideTopicList.component';
import { useGetTopicsQuery } from '@topic/data/hooks/useGetTopicsQuery.hook';
import React, { FunctionComponent, useEffect } from 'react';
import RNBootSplash from 'react-native-bootsplash';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { HomeProps } from './Home.interface';

export const Home: FunctionComponent<HomeProps> = ({ navigation }) => {
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
        <PlayButtonContainer pointerEvents={'box-none'}>
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
  alignItems: 'center',
  bottom: theme.gridUnit * 6,
  right: 0,
  left: 0,
}));
