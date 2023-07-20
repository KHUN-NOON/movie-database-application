import { createTheme, darkScrollbar, responsiveFontSizes } from "@mui/material"

let mainTheme = createTheme({
    palette: {
        mode: 'dark'
    },
    components: {
        MuiCssBaseline: {
            styleOverrides: () => ({
                html: darkScrollbar(),
                div: {
                    '&::-webkit-scrollbar, *::-webkit-scrollbar': {
                        backgroundColor: 'transparent',
                        width: '5px'
                    }
                }
            })
        }
    }
})

mainTheme = responsiveFontSizes(mainTheme)

export default mainTheme