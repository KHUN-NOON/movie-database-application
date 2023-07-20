import { BrowserRouter } from "react-router-dom"
import ApplicationRoute from "./ApplicationRoutes"

const MainRoute = () => {
    return (
        <BrowserRouter>
            <ApplicationRoute/>
        </BrowserRouter>
    )
}

export default MainRoute