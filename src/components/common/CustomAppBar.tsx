import { AppBar, Box, IconButton, Toolbar, Typography } from "@mui/material"
import MovieFilm from '../../assets/icons/movie-film.svg'
import { Search } from "@mui/icons-material"
import { useLocation, useNavigate } from "react-router-dom"

const CustomAppBar = () => {
    const navigate = useNavigate()

    const handleClick = () => {
        navigate('/')
    }

    return (
        <AppBar position="fixed">
            <Toolbar sx={{ justifyContent: 'space-between'}}>
                <Box display='flex' onClick={handleClick} sx={{ cursor: 'pointer' }}>
                    <Box
                        component='img'
                        alt='toolbar-img'
                        src={MovieFilm}
                        sx={{
                            height: 25,
                            width: 25,
                            marginRight: 1
                        }}
                    />
                    <Typography variant="h5" fontWeight='bold'>
                        MovieDB
                    </Typography>
                </Box>

                <ToolbarSearch/>
            </Toolbar>
        </AppBar>
    )
}

const ToolbarSearch = () => {
    const navigate = useNavigate()

    const location = useLocation()

    const handleSearch = () => {
        navigate('/search')
    }

    return (
        <IconButton onClick={handleSearch} sx={{ display: location.pathname === '/search' ? 'none' : 'block' }}>
            <Search/>
        </IconButton>
    )
}

export default CustomAppBar