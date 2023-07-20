import ScreenContainer from "../components/common/ScreenContainer"
import { useGetMovieCreditsQuery, useGetMovieDetailQuery, useGetMovieReleaseDatesQuery } from "../redux/slices/detailSlice"
import { useParams } from "react-router-dom"
import DetailCover from "../components/detail/DetailCover"
import HorizontalCastList from "../components/detail/HorizontalCastList"

const Detail = () => {
    const { id } = useParams()

    const detail = useGetMovieDetailQuery({id: id})

    const releaseDates = useGetMovieReleaseDatesQuery({id: id})

    const credits = useGetMovieCreditsQuery({id: id})

    const director = credits.data?.crew?.find((item: any) => item?.job == "Director")

    return (
        <ScreenContainer>
            <DetailCover
                meta={{
                    poster: detail?.data?.poster_path,
                    backdrop: detail?.data?.backdrop_path,
                    runtime: detail?.data?.runtime,
                    title: detail?.data?.title,
                    date: detail?.data?.release_date,
                    rating: detail?.data?.vote_average,
                    genres: detail?.data?.genres,
                    tagline: detail?.data?.tagline,
                    overview: detail?.data?.overview,
                    budget: detail?.data?.budget,
                    revenue: detail?.data?.revenue,
                    status: detail?.data?.status,
                    original_language: detail?.data?.original_language
                }}
                releaseDates={releaseDates?.data}
                director={director?.name}
            />

            <HorizontalCastList
                isLoading={credits.isLoading}
                casts={credits?.data?.cast}
            />
        </ScreenContainer>
    )
}

export default Detail