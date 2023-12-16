import { configureStore } from '@reduxjs/toolkit'
import todoReducer from '../../features/counter/todoSlice'

export default configureStore({
  reducer: {
    reducer: todoReducer,
  },
})