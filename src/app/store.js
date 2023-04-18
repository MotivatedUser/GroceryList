import { configureStore, createSlice, nanoid } from '@reduxjs/toolkit';

const itemsSlice = createSlice({
  name: 'items',
  initialState: [],
  reducers: {
    addItem: (state, action) => {
      const newItem = { ...action.payload, id: nanoid() };
      state.push(newItem);
    },
    togglePurchased: (state, action) => {
      const index = state.findIndex((item) => item.id === action.payload.id);
      state[index].purchased = !state[index].purchased;
    },    
    deleteItem: (state, action) => {
      return state.filter((item) => item.id !== action.payload.id);
    },
  },
});

export const { addItem, togglePurchased, deleteItem } = itemsSlice.actions;

export const store = configureStore({
  reducer: {
    items: itemsSlice.reducer,
  },
});

export default store;