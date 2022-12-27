import { createSlice } from '@reduxjs/toolkit'

const initialState = []

export const peopleSlice = createSlice({
  name: 'people',
  initialState,
  reducers: {
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

// Action creators are generated for each case reducer function
export const { addOne, updateOne, deleteOne } = peopleSlice.actions

export default peopleSlice.reducer