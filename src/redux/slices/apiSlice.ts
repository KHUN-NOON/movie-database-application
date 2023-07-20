// import { FetchArgs } from "@reduxjs/toolkit/dist/query"
// import { BaseQueryApi } from "@reduxjs/toolkit/dist/query/baseQueryTypes"
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react"
import { baseUrl } from "../../configs/apiEndpoints"

const baseQuery = fetchBaseQuery({
    baseUrl: baseUrl
})

const apiSlice = createApi({
    baseQuery: baseQuery,
    endpoints: () => ({})
})

export default apiSlice