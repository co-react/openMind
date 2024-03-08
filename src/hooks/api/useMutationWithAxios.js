import { useMutation, useQueryClient } from '@tanstack/react-query'

import requests from '../../apis/request'

const queryClient = useQueryClient();

export function useSubjectsMutation(answerer) {
  const query = useMutation({
    mutationFn: async () => await requests.postSubjects(answerer),
    onSuccess: () => {
      // Invalidate and refetch
      queryClient.invalidateQueries({ queryKey: ['subjects'] })
    },
  });

  return query;
}

export function useQuestionsMutation(id, inputValue) {
  const query = useMutation({
    mutationFn: async () => await requests.postSubjects(id, inputValue),
    onSuccess: () => {
      // Invalidate and refetch
      queryClient.invalidateQueries({ queryKey: ['questions'] })
    },
  });

  return query;
}