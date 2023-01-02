import { useQuery } from 'react-query'
import * as cohortService from '../services/cohortService'

export const useCohorts = () => {
  const { data, status } = useQuery('cohorts', () => cohortService.indexCohorts())
  return { data, status }
}
