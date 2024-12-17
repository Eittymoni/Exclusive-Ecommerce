import { createSlice } from '@reduxjs/toolkit'

export const ProductSlice = createSlice({
  name: 'product',
  initialState: {
    value: 0,
  },
  reducers: {
    AddToCart: (state,action) => {
     
    console.log(action.payload);
    
    },
   
  },
})

// Action creators are generated for each case reducer function
export const { AddToCart  } = ProductSlice.actions

export default ProductSlice.reducer