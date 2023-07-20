import { useRef } from "react"
import { Box, Typography } from "@mui/material"
import MovieCard from "../common/MovieCard"
import { IBaseMovieListResult } from "../../types/global"
import HorizontalListSkeleton from "../common/HorizontalListSkeleton"
import { ViewportList } from "react-viewport-list"

interface IProps {
    movies?: any,
    icon?: React.ReactElement,
    title: string,
    isLoading: boolean 
}

const HorizontalList = (props: IProps) => {
    const viewPortRef = useRef<HTMLDivElement | null>(null)

    const { movies, icon, title, isLoading } = props

    return (
        <Box mb={5}>
            <Box mb={2} sx={{ display: 'flex', alignItems: 'center' }}>
                <Typography variant="h5" mr={1}>{title}</Typography>
                {icon}
            </Box>

            <Box
                sx={{
                    width: '100%',
                    display: 'flex',
                    overflow: 'auto',
                    scrollbarWidth: '6px',
                    '&::-webkit-scrollbar': {
                        width: '8px'
                    }
                }}
            >
                <Box
                    sx={{
                        display: 'flex',
                        gap: 2,
                        flexWrap: 'nowrap',
                        paddingBottom: 2
                    }}
                    ref={viewPortRef}
                >
                    {
                        !isLoading ?
                        (
                            <ViewportList
                                viewportRef={viewPortRef}
                                items={movies?.results}
                                initialPrerender={10}
                                axis='x'
                            >
                                {(item: IBaseMovieListResult) => (
                                    <MovieCard
                                        key={item?.id}
                                        meta={{
                                            id: item.id,
                                            date: item.release_date,
                                            title: item?.title,
                                            average_rating: item?.vote_average,
                                            poster: item?.poster_path,
                                            original_name: item.original_name
                                        }}
                                    />
                                )}
                            </ViewportList>
                        ) : 
                        (
                            <HorizontalListSkeleton/>
                        )
                    }
                </Box>
            </Box>
        </Box>
    )
}

export default HorizontalList