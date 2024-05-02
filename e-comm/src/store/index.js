import { configureStore } from '@reduxjs/toolkit'
import  productSlice  from './product'
import  categoryslice from './category'



export const store = configureStore({
  reducer: {
    product:productSlice,
    category:categoryslice
    
  },

})