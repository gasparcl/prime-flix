import {useContext} from "react"
import {FavoritesContext} from "../context/Favorite"

export function useFavoriteMovies() {
    const context = useContext(FavoritesContext)
    return context.movies
}
