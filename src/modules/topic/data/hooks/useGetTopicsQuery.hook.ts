import { useCallback } from 'react';
import { useQuery } from 'react-query';
import { Topic } from '../../types/Topic.type';
import { getTopics } from '../repository/GetTopics.query';

export const GET_TOPICS_QUERY_NAME = 'GET_TOPICS_QUERY_NAME';

interface GetTopicsQueryFilters {
  name?: string;
}

export const useGetTopicsQuery = (filters?: GetTopicsQueryFilters): { topics: Topic[] } => {
  const getTopicsCallback = useCallback(getTopics, [filters]);
  const { data } = useQuery([GET_TOPICS_QUERY_NAME, filters], getTopicsCallback);
  return { topics: data };
};
