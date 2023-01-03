import { useQuery } from '@tanstack/react-query'
import * as cohortService from '../services/cohortService'

export const useCohorts = () => {
  const { data: cohorts, status } = useQuery({
    queryKey: ['cohorts'],
    queryFn: cohortService.indexCohorts
  })

  return { cohorts, status }
}
