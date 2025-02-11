import { combineReducers, configureStore } from '@reduxjs/toolkit'
import userReducer from './utils/reduxSlices/userSlice'
import productReducer from './utils/reduxSlices/productSlice'
import storage from "redux-persist/lib/storage"
import { persistReducer, persistStore } from 'redux-persist'
const persistConfig = {
    key: "root",
    storage
}

const rootReducer = combineReducers({
    user: userReducer,
    product: productReducer
})

const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = configureStore({
    reducer: persistedReducer,
    devTools: true, // TODO We should disable devTools in production 
})

export const persistor = persistStore(store)

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export type AppStore = typeof store