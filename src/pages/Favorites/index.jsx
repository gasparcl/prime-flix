import usePersistedState from "../../hooks/usePersistedState"
import { FAVORITE_STORAGE_KEY } from "../../consts/storage"

import { Grid } from "@material-ui/core"
import PageTitle from "../../components/PageTitle"
import FavoritesCard from "../../components/FavoritesCard "
import { MoviesGrid } from "../Home/styles"

export default function Favorites() {
    // ╦ ╦╔═╗╔═╗╦╔═╔═╗
    // ╠═╣║ ║║ ║╠╩╗╚═╗
    // ╩ ╩╚═╝╚═╝╩ ╩╚═╝
    const [favorites, setFavorites] = usePersistedState(FAVORITE_STORAGE_KEY, [])

    // ╔╦╗╔═╗╦╔╗╔
    // ║║║╠═╣║║║║
    // ╩ ╩╩ ╩╩╝╚╝
    return (
        <>
            <PageTitle description="Favorited Films" upperCase />
            <MoviesGrid container spacing={1}>
                {favorites.map((favorite) => {
                    return (
                        <Grid item xs={3} key={favorite.id}>
                            <FavoritesCard favoriteData={favorite} />
                        </Grid>
                    )
                })}

            </MoviesGrid>
        </>
    )
}
