import ScreenContainer from "../components/common/ScreenContainer"
import HorizontalList from "../components/home/HorizontalList"
import Discover from "../components/home/Discover"
import { useGetTrendingListQuery } from "../redux/slices/homeSlice"
import TrendingUpIcon from '@mui/icons-material/TrendingUp'

const Home = () => {
    const trendings = useGetTrendingListQuery(null)

    return (
        <ScreenContainer>
            <HorizontalList
                movies={trendings.data}
                title='Trending'
                icon={<TrendingUpIcon/>}
                isLoading={trendings.isLoading}
            />

            <Discover/>
        </ScreenContainer>
    )
}

export default Home