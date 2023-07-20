import { configureStore } from "@reduxjs/toolkit"
import { setupListeners } from "@reduxjs/toolkit/dist/query"
import apiSlice from "./slices/apiSlice"
import rootReducer from "./rootReducer"

const store = configureStore({
    reducer: rootReducer,
    middleware: getDefaultMiddleware => getDefaultMiddleware().concat(apiSlice.middleware),
    devTools: import.meta.env.MODE !== 'development'
})

setupListeners(store.dispatch)

export type RootState = ReturnType<typeof store.getState>

export default store