import { useQuery } from 'react-query'
import * as cohortService from '../services/cohortService'

export const useCohorts = () => {
  const { data: cohorts, status } = useQuery('cohorts', () => cohortService.indexCohorts())
  return { cohorts, status }
}
