import { useMutation, useQueryClient } from '@tanstack/react-query'
import * as cohortService from '../services/cohortService'

export const useApproveProfile = (cohortId, profileId, formData) => {
  console.log('useApproveProfile params:::', cohortId, profileId, formData)
  const queryClient = useQueryClient()

  // const {
  //   data,
  //   error,
  //   isError,
  //   isLoading,
  //   mutate,
  // } = 

  return useMutation({
    mutationFn: () => cohortService.approveProfile(cohortId, profileId, formData),
    onSuccess: (response) => {
      queryClient.setQueryData(
        ['people', cohortId],
        (state) => {
          console.log('Form Data ', formData.formerRole)
          console.log('Server Response', response)
          console.log('Current Cache State', state)
          // Perform additional operations to determine the updated value of people
          // const updatedData = ...
          // return updatedData
        }
      )
    },
    onError: (error) => console.log('Error!'),
  })

  // console.log('useMutate data', data)
  // return mutate
}