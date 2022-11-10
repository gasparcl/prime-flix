export interface MovieSearchParams {
    url?: string
    title?: string
}

export interface MovieDetailParams {
    movieId: string
    title: string
}

export interface AppRootParamList {
    home: undefined
    favorites: undefined
    search: MovieSearchParams
    movieDetail: MovieDetailParams
    movieTrailer: MovieDetailParams
}

export declare global {
    namespace ReactNavigation {
        interface RootParamList extends AppRootParamList {}
    }
}
