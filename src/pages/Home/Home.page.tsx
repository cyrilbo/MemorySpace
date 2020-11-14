import { StackNavigationProp } from '@react-navigation/stack';
import React, { FunctionComponent } from 'react';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { RoundButton } from '../../core/components/RoundButton/RoundButton.component';
import styled from '../../core/theme/styled-components';
import { WideTopicList } from '../../modules/topic/components/WideTopicList/WideTopicList.component';
import { useGetTopicsQuery } from '../../modules/topic/data/hooks/useGetTopicsQuery.hook';
import {
  RootNavigatorRouteNames,
  RootNavigatorRouteParamsList,
} from '../../navigation/RootNavigator/RootNavigator.routes';

type HomeScreenNavigationProp = StackNavigationProp<
  RootNavigatorRouteParamsList,
  RootNavigatorRouteNames.Home
>;

type Props = {
  navigation: HomeScreenNavigationProp;
};

export const Home: FunctionComponent<Props> = ({ navigation }) => {
  const openCreateCardModal = () => navigation.navigate(RootNavigatorRouteNames.CreateCardModal);
  const insets = useSafeAreaInsets();
  const { topics } = useGetTopicsQuery();

  return (
    <Container paddingTop={insets.top} paddingBottom={insets.bottom}>
      <WideTopicList topics={topics} onTopicPress={() => {}} />
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
