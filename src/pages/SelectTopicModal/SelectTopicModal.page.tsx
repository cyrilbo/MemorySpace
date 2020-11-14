import { StackNavigationProp } from '@react-navigation/stack';
import React, { FunctionComponent, useState } from 'react';
import { Text } from 'react-native';
import { ModalHeader } from '../../core/components/ModalHeader/ModalHeader.component';
import styled from '../../core/theme/styled-components';
import { NoTopics } from '../../modules/topic/components/NoTopics/NoTopics.component';
import { useGetTopicsQuery } from '../../modules/topic/data/hooks/useGetTopicsQuery.hook';
import {
  RootNavigatorRouteNames,
  RootNavigatorRouteParamsList,
} from '../../navigation/RootNavigator/RootNavigator.routes';

type SelectTopicModalNavigationProp = StackNavigationProp<
  RootNavigatorRouteParamsList,
  RootNavigatorRouteNames.SelectTopicModal
>;

type Props = {
  navigation: SelectTopicModalNavigationProp;
};

export const SelectTopicModal: FunctionComponent<Props> = ({ navigation }) => {
  const closeModal = () => navigation.goBack();
  const [topicSearchInput, setTopicSearchInput] = useState('');
  const { topics, isEmpty } = useGetTopicsQuery({ name: topicSearchInput });
  return (
    <Container>
      <ModalHeader title="Topic" onPressClose={closeModal} />
      <Input
        value={topicSearchInput}
        onChangeText={setTopicSearchInput}
        placeholder="Search for a topic..."
      />
      {isEmpty ? <NoTopics /> : null}
      {topics?.map((topic) => (
        <Text key={topic.id}>{topic.name}</Text>
      ))}
    </Container>
  );
};

const Container = styled.View(({ theme }) => ({
  flex: 1,
  backgroundColor: theme.colors.darkGrey,
}));

const Input = styled.TextInput.attrs(({ theme }) => ({
  placeholderTextColor: theme.colors.transparentIvory,
  selectionColor: theme.colors.ivory,
}))(({ theme }) => ({
  backgroundColor: theme.colors.darkGrey,
  borderTopWidth: 1,
  borderBottomWidth: 1,
  borderColor: theme.colors.black,
  padding: theme.gridUnit * 4,
  color: theme.colors.ivory,
}));
