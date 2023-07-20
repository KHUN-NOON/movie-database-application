import apiSlice from "./apiSlice"
import { baseParam } from "../../configs/apiEndpoints"

const detailSlice = apiSlice.enhanceEndpoints({
    addTagTypes: []
})
.injectEndpoints({
    endpoints: build => ({
        getMovieDetail: build.query({
            query: obj => ({
                url: `/movie/${obj?.id}`,
                method: 'GET',
                params: { ...baseParam }
            })
        }),
        getMovieReleaseDates: build.query({
            query: obj => ({
                url: `/movie/${obj?.id}/release_dates`,
                method: 'GET',
                params: { ...baseParam }
            })
        }),
        getMovieCredits: build.query({
            query: obj => ({
                url: `/movie/${obj?.id}/credits`,
                method: 'GET',
                params: { ...baseParam }
            })
        })
    })
})

export const {
    useGetMovieDetailQuery,
    useGetMovieReleaseDatesQuery,
    useGetMovieCreditsQuery
} = detailSlice
