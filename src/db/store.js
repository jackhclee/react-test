import { configureStore } from '@reduxjs/toolkit'
import counter2Slice from './counter2Slice'
import counterSlice from "./counterSlice"

export default configureStore({
  reducer: {
      counterx: counterSlice,
      counter2: counter2Slice
  },
})