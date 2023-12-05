import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    list: [],
  },
  reducers: {
    addItem: (state, action) => { // Fix the typo here
      state.list = [...state.list, action.payload]; // Fix the typo here
    },
  },
});

export const { addItem } = cartSlice.actions;
export default cartSlice.reducer;
