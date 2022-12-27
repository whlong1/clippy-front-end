import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  cohorts: [],
  selectedCohort: null,
}

export const cohortSlice = createSlice({
  name: 'cohort',
  initialState,
  reducers: {
    selectOne: (state, action) => {
      return action.payload
    }
  },
})

export const { selectOne } = cohortSlice.actions
export default cohortSlice.reducer