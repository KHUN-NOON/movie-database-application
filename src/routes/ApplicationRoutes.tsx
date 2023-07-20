import { Route, Routes } from "react-router-dom"
import Home from "../screens/Home"
import Detail from "../screens/Detail"
import Search from "../screens/Search"
import { CssBaseline, useTheme } from "@mui/material"
import CustomAppBar from "../components/common/CustomAppBar"
import RouteConainer from "../components/common/RouteContainer"

const ApplicationRoute = () => {
    const theme = useTheme()
    const { mixins: { toolbar: { minHeight } } } = theme

    return (
        <>
            <CssBaseline/>
            <CustomAppBar/>
            
            <RouteConainer sx={{ top: minHeight }}>
                <Routes>
                    <Route path='/' element={<Home/>}/>
                    <Route path='detail/:id' element={<Detail/>}/>
                    <Route path='search' element={<Search/>}/>
                </Routes>
            </RouteConainer>
        </>
    )
}

export default ApplicationRoute