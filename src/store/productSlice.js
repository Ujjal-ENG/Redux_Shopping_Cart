import { createSlice } from "@reduxjs/toolkit";

const STATUESES = Object.freeze({
  IDLE: "idle",
  ERROR: "error",
  LOADING: "loading",
});

const productSlice = createSlice({
  name: "product",
  initialState: {
    data: [],
    status: STATUESES.IDLE,
  },
  reducers: {
    setProducts(state, action) {
      state.data = action.payload;
    },

    setStatus(state, action) {
      state.status = action.payload;
    },
  },
});

export const { setProducts, setStatus } = productSlice.actions;
export default productSlice.reducer;

//Thunks

export function fetchProducts() {
  return async function fetchProduct(dispatch, getState) {
    dispatch(setStatus(STATUESES.LOADING));
    try {
      const res = await fetch("https://fakestoreapi.com/products");

      const data = await res.json();

      dispatch(setProducts(data));
      dispatch(setStatus(STATUESES.IDLE));

      
    } catch (error) {
      console.log(error);
      dispatch(setStatus(STATUESES.ERROR));
    }
  };
}
