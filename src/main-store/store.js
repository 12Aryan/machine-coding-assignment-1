import { configureStore } from '@reduxjs/toolkit'
import ItemSliceReducer from '../Redux/ItemSlice'

export const store = configureStore({
  reducer: {
    ItemSlice: ItemSliceReducer
  },
})

