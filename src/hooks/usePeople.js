import { useQuery } from 'react-query'
import * as cohortService from '../services/cohortService'

export const usePeople = (cohortId) => {
  const { data: people, status } = useQuery(
    ['people', cohortId], () => cohortService.getCohortPeople(cohortId)
  )
  return { people, status }
}

// Assuming the following is applicable here:
// https://react-query-v3.tanstack.com/guides/query-keys#array-keys