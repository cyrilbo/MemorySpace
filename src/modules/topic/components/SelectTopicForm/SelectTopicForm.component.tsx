import React, { FunctionComponent, useMemo, useState } from 'react';
import styled from '../../../../core/theme/styled-components';
import { useGetTopicsQuery } from '../../data/hooks/useGetTopicsQuery.hook';
import { TopicColor } from '../../types/TopicColor.type';
import { getRandomTopicColor } from '../../utils/getRandomTopicColor.utils';
import { CreateTopicButton } from '../CreateTopicButton/CreateTopicButton.component';
import { NoTopics } from '../NoTopics/NoTopics.component';
import { TopicListItem } from '../TopicListItem/TopicListItem.component';

export const SelectTopicForm: FunctionComponent = () => {
  const topicColor: TopicColor = useMemo(getRandomTopicColor, []);
  const [topicSearchInput, setTopicSearchInput] = useState('');
  const { topics, isEmpty } = useGetTopicsQuery({ name: topicSearchInput });
  return (
    <>
      <Input
        value={topicSearchInput}
        onChangeText={setTopicSearchInput}
        placeholder="Search for a topic..."
      />
      {isEmpty || topics === undefined ? (
        <>
          <CreateTopicButton
            name={topicSearchInput}
            topicColor={topicColor}
            onTopicCreated={() => console.log('created')}
          />
          <NoTopics />
        </>
      ) : null}
      {topics?.map((topic) => (
        <TopicListItem key={topic.id} topic={topic} onPress={() => console.log(topic.name)} />
      ))}
    </>
  );
};

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
