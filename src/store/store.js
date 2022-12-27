import { configureStore } from '@reduxjs/toolkit'
import peopleReducer from '../features/People/peopleSlice'

export const store = configureStore({
  reducer: {
    people: peopleReducer,
  }
})