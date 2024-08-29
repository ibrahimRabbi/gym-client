import { configureStore } from "@reduxjs/toolkit";
import productSlice from "./features/productSlice";
import { baseApi } from "./api/baseApi";
import clickSlice from "./features/clickSlice";
// import {
//     persistStore,
//     persistReducer,
//     FLUSH,
//     REHYDRATE,
//     PAUSE,
//     PERSIST,
//     PURGE,
//     REGISTER,
// } from 'redux-persist';
// import storage from 'redux-persist/lib/storage'

// const persistConfig = {
//     key: 'root',
//     storage,
// }


// const persistedReducer = persistReducer(persistConfig, productSlice)


export const store = configureStore({
    reducer: {
        orderData: productSlice,
        click :clickSlice,
        [baseApi.reducerPath]: baseApi.reducer
    },
    middleware: (getDefaultMiddleware) => {
        return getDefaultMiddleware().concat(baseApi.middleware)
    }

})


// export let persistor = persistStore(store)
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch