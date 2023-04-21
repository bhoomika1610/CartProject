import Api from 'api';

const {createSlice, createAsyncThunk} = require('@reduxjs/toolkit');

const Productslice = createSlice({
  name: 'products',
  initialState: {products: [], cartList: [], isLoading: false},
  reducers: {
    addToCart(state, action) {
      console.log(action.payload.screen);
      if (action?.payload) {
        let indexPosition = state.cartList.findIndex(
          (item, index) => item.product.id === action.payload.product.id,
        );
        if (indexPosition == -1) {
          state.cartList.unshift(action.payload);
        } else {
          state.cartList[indexPosition].quantity += action.payload.quantity;
          if (state.cartList.length > 1 && action?.payload?.screen !== 'cart') {
            state.cartList.unshift(...state.cartList.splice(indexPosition, 1));
          }
        }
      }
    },
    decreaseQtyInCart(state, action) {
      if (action?.payload) {
        let indexPosition = state.cartList.findIndex(
          (item, index) => item.product.id === action.payload,
        );
        state.cartList[indexPosition].quantity -= 1;
      }
    },
    deleteFromCart(state, action) {
      if (action?.payload) {
        state.cartList = state.cartList.filter(oneProduct => {
          return oneProduct.product.id != action.payload;
        });
      }
    },
  },
  extraReducers: builder => {
    builder.addCase(Api.fetchProducts.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(Api.fetchProducts.fulfilled, (state, action) => {
      state.isLoading = false;
      state.data = action.payload;
    });
    builder.addCase(Api.fetchProducts.rejected, (state, action) => {
      state.isLoading = false;
      state.isError = true;
    });
  },
});

export default Productslice.reducer;

export const {addToCart, decreaseQtyInCart, deleteFromCart} =
  Productslice.actions;
