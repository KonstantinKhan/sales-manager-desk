import {configureStore} from "@reduxjs/toolkit"
import {dealsApi} from "./dealsApi"

export const store = configureStore({
    reducer: {
        [dealsApi.reducerPath]: dealsApi.reducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(dealsApi.middleware)
})
