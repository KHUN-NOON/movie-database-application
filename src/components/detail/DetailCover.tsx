import { Box, Chip, Grid, Stack, Typography } from "@mui/material"
import { backdropPath, posterPath } from "../../configs/apiEndpoints"
import AccessTimeIcon from '@mui/icons-material/AccessTime'
import StarIcon from '@mui/icons-material/Star'
import { format } from "date-fns"

interface IDetailCover {
    meta: {
        poster: string,
        backdrop: string,
        date: string,
        title: string,
        runtime: string,
        rating: number,
        genres: {
            id: number,
            name: string
        }[],
        tagline: string,
        overview: string,
        budget: number,
        revenue: number,
        original_language: string,
        status: string
    },
    releaseDates: {
        id: number,
        results: {
            iso_3166_1: string,
            release_dates: {
                certification: string,
                release_date: string
            }[]
        }[]
    },
    director: string
}

const DetailCover = (props: IDetailCover) => {
    const { meta, releaseDates, director } = props

    const _USreleaseDates = releaseDates?.results.find( item => item.iso_3166_1 === "US")

    const _USCertification = _USreleaseDates?.release_dates[0].certification

    const convertUSD = (num: number = 0) => {
        return num.toLocaleString('en-US', {
            style: 'currency',
            currency: 'USD'
        })
    }

    return (
        <Box
            sx={{
                backgroundImage: `url(${backdropPath + meta.backdrop})`,
                backgroundPosition: `left calc((50vw - 170px) - 340px) top`,
                backgroundRepeat: `no-repeat`,
                backgroundSize: 'cover',
                width: '100%',
                zIndex: 1
            }}
        >
            <Box
                sx={{
                    backgroundImage: `linear-gradient(to right, rgba(31.5, 10.5, 10.5, 1) calc((50vw - 170px) - 340px), rgba(31.5, 10.5, 10.5, 0.84) 50%, rgba(31.5, 10.5, 10.5, 0.84) 100%)`,
                    paddingInline: { xs: 3, sm: 10 },
                    paddingBlock: 3
                }}
            >
                <Grid container gap={3}>
                    <Grid item xs={12} sm={3}>
                        <img
                            src={posterPath + meta.poster}
                            width='100%'
                            style={{ borderRadius: '10px' }}
                        />
                    </Grid>

                    <Grid item xs={12} sm={8}>
                        <Typography variant="h4" fontWeight='bold'>{meta.title}</Typography>

                        <Box mt={1} mb={3} sx={{ display: 'flex', gap: 2, alignItems: 'center' }}>
                            <Typography color='gray' fontSize='12px' paddingX={1} border='1px solid'>
                                {
                                    _USCertification === '' ?
                                    'N/A':
                                    _USCertification
                                }
                            </Typography>
                            <Typography fontSize='14px'>
                                {
                                    meta.date ?
                                    format(new Date(meta.date), 'MMM d, yyyy') :
                                    'N/A'
                                }
                            </Typography>
                            <Box display='flex' gap={1}>
                                <AccessTimeIcon fontSize="small"/>
                                <Typography fontSize='14px'>
                                    {meta.runtime}m
                                </Typography>
                            </Box>

                            <Box display='flex' gap={1}>
                                <StarIcon fontSize="small"/>
                                <Typography fontSize='14px'>
                                    {
                                        meta.rating ?
                                        meta.rating.toFixed(1) :
                                        "N/A"
                                    }
                                </Typography>
                            </Box>
                        </Box>

                        <Stack direction='row' spacing={1} rowGap={2} sx={{ flexWrap: 'wrap' }}>
                            {
                                meta.genres?.map((item) => (
                                    <Chip key={item.id} variant='outlined' size='small' label={item.name}/>
                                ))
                            }
                        </Stack>

                        <Box mt={2} mb={3} sx={{ display: 'flex', gap: 2, alignItems: 'center', flexWrap: 'wrap' }}>
                            <Box gap={1}>
                                <Typography>Status</Typography>
                                <Typography fontSize='14px'>
                                    {meta.status}
                                </Typography>
                            </Box>

                            <Box gap={1}>
                                <Typography>Budget</Typography>
                                <Typography fontSize='14px'>
                                    {convertUSD(meta.budget)}
                                </Typography>
                            </Box>

                            <Box gap={1}>
                                <Typography>Revenue</Typography>
                                <Typography fontSize='14px'>
                                    {convertUSD(meta.revenue)}
                                </Typography>
                            </Box>

                            <Box gap={1}>
                                <Typography>Original Language</Typography>
                                <Typography fontSize='14px'>
                                    {meta.original_language}
                                </Typography>
                            </Box>
                        </Box>
                        
                        <Box mt={4}>
                            <Typography fontStyle='italic' color='gray'>
                                {meta.tagline}
                            </Typography>

                            <Typography variant='h5' fontWeight='bold' marginY={1.5}>
                                Overview
                            </Typography>

                            <Typography>
                                {meta.overview}
                            </Typography>
                        </Box>

                        <Box mt={5} display={ director ? 'block' : 'none'}>
                            <Typography fontWeight='bold'>{director}</Typography>
                            <Typography fontSize='14px'>Director</Typography>
                        </Box>
                    </Grid>
                </Grid>
            </Box>
        </Box>
    )
}

export default DetailCover