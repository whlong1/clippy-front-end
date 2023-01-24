import { useMutation, useQueryClient } from '@tanstack/react-query'
import * as squadService from '../services/squadService'

export const useSquadManager = () => {
  const queryClient = useQueryClient()

  const types = {
    add: {
      service: squadService.addSquadMember,
      handleCache: (res, payload) => {
        const queryKey = []
        const updateState = (state) => {}
        queryClient.setQueryData(queryKey, updateState)
      },
    },
  }

  return useMutation({
    mutationFn: (action) => types[action.type].service(),
    onSuccess: (res, action) => types[action.type].handleCache(res, action.payload),
    onError: (error) => console.log('Error!'),
  })
}


// create squad

// index all squads

// add squad member
//    update profile
//    update squad

// removeSquadMember
//    update profile
//    update squad




// should we add a squad property to profile?