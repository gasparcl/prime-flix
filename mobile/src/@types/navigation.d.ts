export interface MovieDetailParams {
    movieId: string
    title: string
    isTrailer?: boolean
}

export interface AppRootParamList {
    home: undefined
    favorites: undefined
    preferences: undefined
    movieDetail: MovieDetailParams
}

export declare global {
    namespace ReactNavigation {
        interface RootParamList extends AppRootParamList {}
    }
}
