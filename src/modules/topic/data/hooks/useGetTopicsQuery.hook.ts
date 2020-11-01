import { useCallback } from 'react';
import { useQuery } from 'react-query';
import { Topic } from '../../types/Topic.type';
import { getTopics } from '../repository/GetTopics.query';

export const GET_TOPICS_QUERY_NAME = 'GET_TOPICS_QUERY_NAME';

export const useGetTopicsQuery = (): { topics: Topic[] } => {
  const getTopicsCallback = useCallback(getTopics, []);
  const { data } = useQuery(GET_TOPICS_QUERY_NAME, getTopicsCallback);
  return { topics: data };
};
