import { useQuery, useInfiniteQuery } from '@tanstack/react-query'

import requests from '../../apis/request'

export function useSubjectsQuery() {
  const {isSuccess, isLoading, isError, data} = useQuery({
    queryKey: ["subjects"],
    queryFn: async () => await requests.getSubjects()}
  );

  return {isSuccess, isLoading, isError, data};
}

export function useSubjectQuery(id) {
  const {isSuccess, isLoading, isError, data} = useQuery({
    queryKey: [`subject_${id}`],
    queryFn: async () => await requests.getSubject(id)}
  );
  
  return {isSuccess, isLoading, isError, data};
}

export function useInfiniteQuestionsQuery({id, limit}) {
  const {data, isSuccess , isPending, hasNextPage, fetchNextPage} = useInfiniteQuery({
    queryKey: [`questions_${id}`],
    queryFn: async ({ pageParam=0 }) => await requests.getQuestions({id, limit, offset: pageParam}),
    getNextPageParam: (lastPage) => {
      const inputString = lastPage.next;
      const match = /offset=(\d+)/.exec(inputString);
      const offsetValue = match ? match[1] : null;

      return offsetValue;
    },
    select: (data) => {
      return data.pages.flatMap((page) => page.results);
    },
  })

  return {data,isSuccess ,isPending, hasNextPage, fetchNextPage}
}