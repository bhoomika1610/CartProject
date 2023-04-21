import ProductsliceReducer from './ProductSlice';
import {addToCart, deleteFromCart, decreaseQtyInCart} from './ProductSlice';
let ProductsliceActions = {addToCart, deleteFromCart, decreaseQtyInCart};
module.exports = {
  ProductsliceReducer,
  ProductsliceActions,
};
