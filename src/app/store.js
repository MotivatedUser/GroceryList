import { configureStore, createSlice } from '@reduxjs/toolkit';

const itemsSlice = createSlice({
  name: 'items',
  initialState: [],
  reducers: {
    addItem: (state, action) => {
      state.push(action.payload);
    },
    togglePurchased: (state, action) => {
      const index = state.findIndex((item) => item === action.payload);
      state[index].purchased = !state[index].purchased;
    },
    deleteItem: (state, action) => {
      return state.filter((item) => item !== action.payload);
    },
  },
});

export const { addItem, togglePurchased, deleteItem } = itemsSlice.actions;

export const store = configureStore({
  reducer: {
    items: itemsSlice.reducer,
  },
});

