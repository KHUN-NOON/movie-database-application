import { useState } from 'react'
import { Box, Grid, Typography, Pagination, Skeleton } from "@mui/material"
import MovieCard from "../common/MovieCard"
import { IBaseMovieListResult } from "../../types/global"

interface ISearchResult {
    searchResult: any,
    isLoading: boolean
}

const SearchResult = (props: ISearchResult) => {
    const [ page, setPage ] = useState(1)

    const { searchResult, isLoading } = props

    const handlePageChange = (e: React.ChangeEvent<unknown>, value: number) => {
        console.log(e)

        setPage(value)
    }

    return (
        <Box mb={5} display={ searchResult?.results.length > 0 ? 'block' : 'none' }>
            <Box mb={2} sx={{ display: 'flex', alignItems: 'center' }}>
                <Typography variant='h5' mr={1}>Search Result: </Typography>
            </Box>

            <Box 
                sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    flexDirection: 'column'
                }}
            >
                <Grid container columnSpacing={{ xs: 3, sm: 2, md: 1 }} rowSpacing={3}
                    className='scroll-container'
                    sx={{
                        width: '100%'
                    }}
                >
                    {
                        !isLoading ?
                        (
                            searchResult?.results?.map((item: IBaseMovieListResult) => (
                                <Grid item key={item.id} xs={4} sm={3} md={2} lg={1.5}>
                                    <MovieCard
                                        meta={{
                                            id: item.id,
                                            date: item.release_date,
                                            title: item?.title,
                                            average_rating: item?.vote_average,
                                            poster: item?.poster_path,
                                            original_name: item.original_name
                                        }}
                                    />
                                </Grid>
                            ))
                        ) : 
                        (
                            Array.from({length: 20}, (_, index) => {
                                return (
                                    <Grid item key={index} xs={4} sm={3} md={2} lg={1.5}>
                                        <Skeleton variant="rectangular" height={300}
                                            sx={{
                                                width: {
                                                    xs: 100,
                                                    sm: 150
                                                },
                                                minWdth: {sm: 150, xs: 100}
                                            }}
                                        />
                                    </Grid>
                                )
                            })
                        )
                    }
                </Grid>

                <Pagination 
                    sx={{ mt: 3 }} 
                    shape="rounded" 
                    count={searchResult?.total_pages}
                    page={page}
                    onChange={handlePageChange}
                />
            </Box>
        </Box>
    )
}

export default SearchResult