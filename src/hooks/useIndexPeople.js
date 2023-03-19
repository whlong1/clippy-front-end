import { useQuery } from '@tanstack/react-query'
import * as cohortService from '../services/cohortService'

export const useIndexPeople = (cohortId) => {
  const { data: people, status } = useQuery({
    queryKey: ['people', cohortId],
    queryFn: () => cohortService.getCohortPeople(cohortId)
  })
  return { people, status }
}