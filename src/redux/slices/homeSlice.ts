import { baseParam } from "../../configs/apiEndpoints"
import { IMovieListResult } from "../../types/home_slice"
import apiSlice from "./apiSlice"

const homeApi = apiSlice.enhanceEndpoints({
    addTagTypes: []
})
.injectEndpoints({
    endpoints: build => ({
        getMovieChanges: build.query({
            query: () => ({
                url: '/movie/changes',
                method: 'GET',
                params: baseParam
            })
        }),
        getMovieDiscover: build.query({
            query: obj => ({
                url: '/discover/movie',
                method: 'GET',
                params: { ...baseParam, ...obj }
            })
        }),
        getTrendingList: build.query<IMovieListResult, any>({
            query: obj => ({
                url: '/trending/movie/week',
                method: 'GET',
                params: { ...baseParam , ...obj }
            })
        }),
        getPopularList: build.query<IMovieListResult, any>({
            query: obj => ({
                url: '/movie/popular',
                method: 'GET',
                params: { ...baseParam, ...obj }
            })
        }),
        getTopRatedList: build.query<IMovieListResult, any>({
            query: obj => ({
                url: '/movie/top_rated',
                method: 'GET',
                params: { ...baseParam, ...obj }
            })
        })
    })
})

export const {
    useGetMovieChangesQuery,
    useGetMovieDiscoverQuery,
    useGetTrendingListQuery,
    useGetPopularListQuery,
    useGetTopRatedListQuery
} = homeApi