import apiSlice from "./apiSlice"
import { baseParam } from "../../configs/apiEndpoints"

const searchSlice = apiSlice.enhanceEndpoints({
    addTagTypes: []
})
.injectEndpoints({
    endpoints: build => ({
        getMovieSearch: build.query({
            query: obj => ({
                url: '/search/movie',
                method: 'GET',
                params: { ...baseParam, ...obj }
            })
        })
    })
})

export const {
    useGetMovieSearchQuery
} = searchSlice