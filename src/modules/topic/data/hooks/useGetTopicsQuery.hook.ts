import { getTopics, GetTopicsParams } from '@topic/data/repository/GetTopics.query';
import { Topic } from '@topic/types/Topic.type';
import { useQuery } from 'react-query';

export const GET_TOPICS_QUERY_NAME = 'GET_TOPICS_QUERY_NAME';

export const useGetTopicsQuery = (
  params?: GetTopicsParams
): { topics: Topic[]; isLoading: boolean; isEmpty: boolean } => {
  const { data, isLoading } = useQuery([GET_TOPICS_QUERY_NAME, params], getTopics);
  return { topics: data || [], isLoading, isEmpty: data?.length === 0 };
};
