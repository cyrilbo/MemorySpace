import { TextInput } from '@core/components/TextInput/TextInput.component';
import { useDebounce } from '@core/hooks/useDebounce.hook';
import styled from '@core/theme/styled-components';
import { CreateTopicButton } from '@topic/components/CreateTopicButton/CreateTopicButton.component';
import { NoTopics } from '@topic/components/NoTopics/NoTopics.component';
import { TopicList } from '@topic/components/TopicList/TopicList.component';
import { useGetTopicsQuery } from '@topic/data/hooks/useGetTopicsQuery.hook';
import { Topic } from '@topic/types/Topic.type';
import { TopicColor } from '@topic/types/TopicColor.type';
import { getRandomTopicColor } from '@topic/utils/getRandomTopicColor.utils';
import React, { FunctionComponent, useMemo, useState } from 'react';

interface Props {
  onTopicSelected: (topic: Topic) => void;
}

export const SelectTopicForm: FunctionComponent<Props> = ({ onTopicSelected }) => {
  const topicColor: TopicColor = useMemo(getRandomTopicColor, []);
  const [topicSearchInput, setTopicSearchInput] = useState('');
  const debouncedTopicSearchInput = useDebounce(topicSearchInput, 400);
  const { topics } = useGetTopicsQuery({ name: debouncedTopicSearchInput });
  return (
    <>
      <InputContainer>
        <Input
          value={topicSearchInput}
          onChangeText={setTopicSearchInput}
          placeholder="Search for a topic..."
          maxLength={30}
        />
      </InputContainer>

      <TopicList
        topics={topics}
        onTopicPress={(topic: Topic) => onTopicSelected(topic)}
        NoData={
          <>
            {topicSearchInput.length > 0 ? (
              <CreateTopicButton name={topicSearchInput} topicColor={topicColor} />
            ) : null}
            <NoTopics />
          </>
        }
      />
    </>
  );
};

const InputContainer = styled.View({ flexDirection: 'row' });

const Input = styled(TextInput)(({ theme }) => ({
  borderTopWidth: 1,
  borderBottomWidth: 1,
  borderColor: theme.colors.black,
  padding: theme.gridUnit * 4,
}));
