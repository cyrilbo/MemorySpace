import { useCallback } from 'react';
import { useQuery } from 'react-query';
import { Topic } from '../../types/Topic.type';
import { getTopics } from '../repository/GetTopics.query';
import { GetTopicsParams } from './../repository/GetTopics.query';

export const GET_TOPICS_QUERY_NAME = 'GET_TOPICS_QUERY_NAME';

export const useGetTopicsQuery = (
  params?: GetTopicsParams
): { topics: Topic[]; isLoading: boolean; isEmpty: boolean } => {
  const getTopicsCallback = useCallback(getTopics, [params]);
  const { data, isLoading } = useQuery([GET_TOPICS_QUERY_NAME, params], getTopicsCallback);
  return { topics: data || [], isLoading, isEmpty: data?.length === 0 };
};
