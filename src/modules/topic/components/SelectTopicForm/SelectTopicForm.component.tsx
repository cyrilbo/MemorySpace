import React, { FunctionComponent, useMemo, useState } from 'react';
import { useDebounce } from '../../../../core/hooks/useDebounce.hook';
import styled from '../../../../core/theme/styled-components';
import { useGetTopicsQuery } from '../../data/hooks/useGetTopicsQuery.hook';
import { Topic } from '../../types/Topic.type';
import { TopicColor } from '../../types/TopicColor.type';
import { getRandomTopicColor } from '../../utils/getRandomTopicColor.utils';
import { CreateTopicButton } from '../CreateTopicButton/CreateTopicButton.component';
import { NoTopics } from '../NoTopics/NoTopics.component';
import { TopicList } from '../TopicList/TopicList.component';

export const SelectTopicForm: FunctionComponent = () => {
  const topicColor: TopicColor = useMemo(getRandomTopicColor, []);
  const [topicSearchInput, setTopicSearchInput] = useState('');
  const debouncedTopicSearchInput = useDebounce(topicSearchInput, 400);
  const { topics } = useGetTopicsQuery({ name: debouncedTopicSearchInput });
  return (
    <>
      <Input
        value={topicSearchInput}
        onChangeText={setTopicSearchInput}
        placeholder="Search for a topic..."
      />
      <TopicList
        topics={topics}
        onTopicPress={(topic: Topic) => console.log(topic.name)}
        NoData={
          <>
            <CreateTopicButton
              name={topicSearchInput}
              topicColor={topicColor}
              onTopicCreated={() => console.log('created')}
            />
            <NoTopics />
          </>
        }
      />
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
