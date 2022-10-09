import {configureStore} from "@reduxjs/toolkit"
import {dealsApi} from "./dealsApi"
import probabilityReducer from "./probabilitySlice"

export const store = configureStore({
    reducer: {
        [dealsApi.reducerPath]: dealsApi.reducer,
        probability: probabilityReducer

    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(dealsApi.middleware)
})

export type RootState = ReturnType<typeof store.getState>
