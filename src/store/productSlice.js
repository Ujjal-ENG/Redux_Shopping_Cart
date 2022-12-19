import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const STATUESES = Object.freeze({
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
    // setProducts(state, action) {
    //   state.data = action.payload;
    // },
    // setStatus(state, action) {
    //   state.status = action.payload;
    // },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state, action) => {
        state.status = STATUESES.LOADING;
      })

      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.data = action.payload;
        state.status = STATUESES.IDLE;
      })

      .addCase(fetchProducts.rejected, (state, action) => {
        state.status = STATUESES.ERROR;
      });
  },
});

export const { setProducts, setStatus } = productSlice.actions;
export default productSlice.reducer;

//Thunks

export const fetchProducts = createAsyncThunk("products/fetch", async () => {
  const res = await fetch("https://fakestoreapi.com/products");
  const data = await res.json();

  return data;
});

// export function fetchProducts() {
//   return async function fetchProduct(dispatch, getState) {
//     dispatch(setStatus(STATUESES.LOADING));
//     try {
//       const res = await fetch("https://fakestoreapi.com/products");

//       const data = await res.json();

//       dispatch(setProducts(data));
//       dispatch(setStatus(STATUESES.IDLE));

//     } catch (error) {
//       console.log(error);
//       dispatch(setStatus(STATUESES.ERROR));
//     }
//   };
// }
