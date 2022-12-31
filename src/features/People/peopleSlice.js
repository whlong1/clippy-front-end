import { createSlice } from '@reduxjs/toolkit'

const initialState = []

export const peopleSlice = createSlice({
  name: 'people',
  initialState,
  reducers: {
    setPeople: (state, action) => {
      return action.payload
    },
    addOne: (state, action) => {
      return [...state, action.payload]
    },
    updateOne: (state, action) => {
      return state.map(el => el._id === action.payload._id ? action.payload : el)
    },
    deleteOne: (state, action) => {
      return state.filter(el => el._id !== action.payload._id)
    },
  },

})

export const { setPeople, addOne, updateOne, deleteOne } = peopleSlice.actions
export default peopleSlice.reducer