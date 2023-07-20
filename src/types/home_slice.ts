import { IBaseMovieListResult, IGlobalPagination } from "./global"

export interface IResults {
    id: number,
    adult: boolean
}

export interface IGetMovieChanges extends IGlobalPagination {
    results: IResults[]
}

export interface IGetMovieChangesParams {
    page: number,
    start_date: Date,
    end_data: Date
}

export interface IMovieListResult extends IGlobalPagination {
    results: IBaseMovieListResult[]
}