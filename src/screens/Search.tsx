import { useState } from 'react'
import { Box, InputAdornment, TextField } from "@mui/material"
import ScreenContainer from "../components/common/ScreenContainer"
import SearchIcon from '@mui/icons-material/Search'
import { useGetMovieSearchQuery } from '../redux/slices/searchSlice'
import SearchResult from '../components/search/SearchResult'

const Search = () => {
    const [ query, setQuery ] = useState('')

    const search = useGetMovieSearchQuery({query: query})

    const handleQueryChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        if ( e.target.value.length > 3 ) {
            setQuery(e.target.value)
        }
    }

    return (
        <ScreenContainer sx={{ paddingInline: { sm: 10 } }}>
            <Box mb={5}>
                <TextField
                    size='small'
                    fullWidth
                    placeholder="Search Movie Name"
                    InputProps={{
                        endAdornment: <InputAdornment position='end'><SearchIcon/></InputAdornment>
                    }}
                    onChange={handleQueryChange}
                />
            </Box>

            <SearchResult
                isLoading={search.isLoading}
                searchResult={search.data}
            />
        </ScreenContainer>
    )
}

export default Search