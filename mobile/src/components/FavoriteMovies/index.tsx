import {useFavoriteMovies} from "../../hooks/useFavoriteMovies"
import Movies, {MoviesProps} from "../Movies"

export function FavoriteMovies(props: MoviesProps) {
    const favoriteMovies = useFavoriteMovies()

    return (
        <Movies
            title="Minha lista"
            data={favoriteMovies.data}
            showSeeAll={false}
            {...props}
        />
    )
}
