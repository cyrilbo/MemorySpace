import { getTopics, GetTopicsParams } from '@topic/data/repository/GetTopics.query';
import { Topic } from '@topic/types/Topic.type';
import { useCallback } from 'react';
import { useQuery } from 'react-query';

export const GET_TOPICS_QUERY_NAME = 'GET_TOPICS_QUERY_NAME';

export const useGetTopicsQuery = (
  params?: GetTopicsParams
): { topics: Topic[]; isLoading: boolean; isEmpty: boolean } => {
  const getTopicsCallback = useCallback(getTopics, [params]);
  const { data, isLoading } = useQuery([GET_TOPICS_QUERY_NAME, params], getTopicsCallback);
  return { topics: data || [], isLoading, isEmpty: data?.length === 0 };
};
