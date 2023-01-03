import { useQuery } from '@tanstack/react-query'
import * as cohortService from '../services/cohortService'

export const usePeople = (cohortId) => {
  const { data: people, status } = useQuery({
    queryKey: ['people', cohortId],
    queryFn: () => cohortService.getCohortPeople(cohortId)
  })

  return { people, status }
}

// Assuming the following is applicable here:
// https://tanstack.com/query/v4/docs/react/guides/query-keys