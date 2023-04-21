import {configureStore} from '@reduxjs/toolkit';
import {ProductsliceReducer} from 'slices';
import {persistStore, persistReducer} from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';
const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
};
const persistedReducer = persistReducer(persistConfig, ProductsliceReducer);

export default store = configureStore({
  reducer: {
    product: persistedReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
