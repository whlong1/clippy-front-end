import { useQuery } from '@tanstack/react-query'
import * as cohortService from '../services/cohortService'

export const useIndexCohorts = () => {
  const { data: cohorts, status } = useQuery({
    queryKey: ['cohorts'],
    queryFn: cohortService.indexCohorts
  })

  return { cohorts, status }
}
