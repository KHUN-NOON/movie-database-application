import apiSlice from "./slices/apiSlice"

const rootReducer = {
    [ apiSlice.reducerPath ]: apiSlice.reducer
}

export default rootReducer