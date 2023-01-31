import { combineReducers, configureStore } from '@reduxjs/toolkit'
import thunk from 'redux-thunk'
import storage from 'redux-persist/lib/storage'
import { persistReducer, persistStore } from 'redux-persist'
import { LoginUser, Category, AllProduct, perCategory, detailProduct, NameUser, cartSlice } from './redux'

const persistConfig = {
  key: 'root',
  storage,
}

const rootReducer = combineReducers({ 
  user: persistReducer(persistConfig, LoginUser.reducer),
  detailProduct: persistReducer(persistConfig, detailProduct.reducer),
  nameUser: NameUser.reducer,
  category: Category.reducer,
  product: AllProduct.reducer,
  perCategory: perCategory.reducer,
  cart: persistReducer(persistConfig, cartSlice.reducer),
})

// const persistedReducer = persistReducer(persistConfig, rootReducer.user)
export const store = configureStore({
  reducer: rootReducer,
  devTools: process.env.NODE_ENV !== 'production',
  middleware: [thunk]
})

export const persistor = persistStore(store)