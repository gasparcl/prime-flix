import React, {createContext, useCallback} from "react"
import {IMovie} from "../components/Movies"
import {FAVORITE_MOVIES_KEY} from "../constants/storageKeys"

import {usePersistedState} from "../hooks/usePersistedState"
import {uniqueArray} from "../utils/uniqueArray"

interface FavoritesContextData {
    movies: {
        data: IMovie[]
        loading: boolean,
        add: (movie: IMovie) => void
        remove: (movieId: IMovie['id']) => void
        clear: () => void
    }
}

interface FavoritesProviderProps {
    children: React.ReactNode
}

export const FavoritesContext = createContext({} as FavoritesContextData)

export function FavoritesProvider({children}: FavoritesProviderProps) {
    const [movies, setMovies, moviesIsLoading] = usePersistedState<IMovie[]>(
        FAVORITE_MOVIES_KEY,
        []
    )

    const addMovie = useCallback((movie: IMovie) => {
        setMovies(previousMovies => 
            uniqueArray(previousMovies.concat(movie))
        )
    }, [])

    const removeMovie = useCallback((movieId: IMovie['id']) => {
        setMovies(previousMovies => 
            previousMovies.filter(movie => movie.id !== movieId)
        )
    }, [])

    const clearMovie = useCallback(() => {
        setMovies([])
    }, [])

    return (
        <FavoritesContext.Provider
            value={{
                movies: {
                    data: movies,
                    loading: moviesIsLoading,
                    add: addMovie,
                    remove: removeMovie,
                    clear: clearMovie
                },
            }}
        >
            {children}
        </FavoritesContext.Provider>
    )
}
