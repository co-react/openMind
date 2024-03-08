import { useQuery } from '@tanstack/react-query'

import requests from '../../apis/request'

export function useSubjectsQuery() {
  const query = useQuery({
    queryKey: ["subjects"],
    queryFn: async () => await requests.getSubjects()}
  );

  return query;
}

export function useSubjectQuery(id) {
  const {isSuccess, isLoading, isError, data} = useQuery({
    queryKey: ["subject"],
    queryFn: async () => await requests.getSubject(id)}
  );
  
  return {isSuccess, isLoading, isError, data};
}

export function useQuestionsQuery(id) {
  const query = useQuery({
    queryKey: ["questions"],
    queryFn: async () => await requests.getQuestions(id)}
  );

  return query;
}