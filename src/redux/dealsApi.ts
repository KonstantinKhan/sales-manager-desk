import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react"

export const dealsApi = createApi({
    reducerPath: 'dealsApi',
    baseQuery: fetchBaseQuery({baseUrl: 'http://localhost:3001'}),
    endpoints: (build) => ({
        getDeals: build.query<void, void>({
            query: () => `deals`
        })
    })

})

export const {useGetDealsQuery} = dealsApi