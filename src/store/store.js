import { configureStore, createSlice } from '@reduxjs/toolkit';

const initialState = {
  cart: [],
  user: null,
};

const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const product = action.payload;
      const existingItem = state.cart.find(item => item.id === product.id);

      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.cart.push({ ...product, quantity: 1 });
      }
    },

    removeFromCart: (state, action) => {
      state.cart = state.cart.filter(item => item.id !== action.payload);
    },

    updateQuantity: (state, action) => {
      const { id, quantity } = action.payload;
      const item = state.cart.find(item => item.id === id);

      if (item) {
        item.quantity = quantity;
      }
    },

    setUser: (state, action) => {
      state.user = action.payload;
    },

    clearCart: (state) => {
      state.cart = [];
    }
  },
});

export const selectCart = (state) => state.app.cart;
export const selectCartCount = (state) =>
  state.app.cart.reduce((total, item) => total + item.quantity, 0);
export const selectTotalPrice = (state) =>
  state.app.cart.reduce((total, item) => total + (item.price * item.quantity), 0);
export const selectUser = (state) => state.app.user;

export const { 
  addToCart, 
  removeFromCart, 
  updateQuantity, 
  setUser, 
  clearCart,
} = appSlice.actions;

export const store = configureStore({
  reducer: {
    app: appSlice.reducer
  },
});
