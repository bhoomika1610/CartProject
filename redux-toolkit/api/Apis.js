import {createAsyncThunk} from '@reduxjs/toolkit';
import Endpoints from 'endpoints';
import ApiClient from 'axiosclient';

const fetchProducts = createAsyncThunk('fetchProducts', async () => {
  const res = await ApiClient.get(Endpoints.PRODUCTS_API);
  return res.data.slice(2, 12);
});

module.exports = {
  fetchProducts,
};
