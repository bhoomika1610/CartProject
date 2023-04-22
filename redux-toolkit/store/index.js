import {configureStore} from '@reduxjs/toolkit';
import {ProductsliceReducer} from 'slices';
import {persistReducer} from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {combineReducers} from 'redux';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
};

const rootReducer = combineReducers({
  product: ProductsliceReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export default store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
