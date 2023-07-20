import { BrowserRouter } from "react-router-dom"
import ApplicationRoute from "./ApplicationRoutes"

const MainRoute = () => {
    return (
        <BrowserRouter basename="/movie-database-application">
            <ApplicationRoute/>
        </BrowserRouter>
    )
}

export default MainRoute