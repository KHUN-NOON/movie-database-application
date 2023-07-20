import { useCallback } from 'react'
import { Box, Card, CardActionArea, CardContent, CardMedia, Typography, useTheme } from "@mui/material"
import { posterPath } from "../../configs/apiEndpoints"
import StarIcon from '@mui/icons-material/Star'
import format from 'date-fns/format'
import { useNavigate } from 'react-router-dom'
import movieImg from '../../assets/icons/movie.png'

interface IMovieCard {
    meta: {
        id: number,
        date: string,
        title: string,
        poster: string,
        average_rating: number,
        original_name?: string
    }
}

const MovieCard = (props: IMovieCard) => {
    const { meta } = props

    const navigate = useNavigate()

    const formatDate = useCallback((date: string) => {
        if ( date ) {
            return format(new Date(date), 'MMM d, yyyy')
        } else {
            return 'n.d'
        }
    }, [])

    const handleClick = () => {
        navigate(`/detail/${meta.id}`)
    }

    return (
        <Card sx={{ minWdth: {sm: 150, xs: 100}, width: {sm: 150, xs: 100}} }>
            <CardActionArea onClick={handleClick}>
                <CardMedia
                    component='img'
                    height='100%'
                    width='100%'
                    alt='movie-thumbnail'
                    src={ meta ? posterPath + meta.poster : movieImg}
                    loading="lazy"
                />
                <AverageRating average_rating={meta.average_rating}/>
            </CardActionArea>
            <CardContent sx={{ paddingBottom: 0 }}>
                <Typography fontSize='14px' noWrap>
                    {meta.title ?? meta.original_name ?? "N/A"}
                </Typography>
                <Typography fontSize={'14px'} color='GrayText'>{formatDate(meta.date)}</Typography>
            </CardContent>
        </Card>
    )
}

interface IAverageRating {
    average_rating: number
}

const AverageRating = (props: IAverageRating) => {
    const theme = useTheme()

    const { average_rating } = props

    return (
        <Box
            sx={{
                top: theme.spacing(1),
                display: 'flex',
                paddingInline: 1,
                position: 'absolute',
                right: theme.spacing(1),
                bgcolor: 'black',
            }}
        >
            <StarIcon fontSize="small" sx={{ color: 'gold' }}/>

            <Typography flex={1} fontSize='14px'>
                {average_rating.toFixed(1)}
            </Typography>
        </Box>
    )
}

export default MovieCard