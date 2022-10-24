import usePersistedState from "../../hooks/usePersistedState"
import { FAVORITE_STORAGE_KEY } from "../../consts/storage"

import PageTitle from "../../components/PageTitle"
import FilmsCard from "../../components/FilmsCard"
import { FavoriteGridItem, FavoritesGrid } from "./styles"

export default function Favorites() {
    // ╦ ╦╔═╗╔═╗╦╔═╔═╗
    // ╠═╣║ ║║ ║╠╩╗╚═╗
    // ╩ ╩╚═╝╚═╝╩ ╩╚═╝
    const [favorites, setFavorites] = usePersistedState(
        FAVORITE_STORAGE_KEY,
        [],
    )

    // ╔╦╗╔═╗╦╔╗╔
    // ║║║╠═╣║║║║
    // ╩ ╩╩ ╩╩╝╚╝
    return (
        <>
            <PageTitle description="Favorited Films" upperCase />
            <FavoritesGrid container spacing={2}>
                {favorites.map((favorite) => {
                    return (
                        <FavoriteGridItem item xs={3} key={favorite.id}>
                            <FilmsCard filmData={favorite} />
                        </FavoriteGridItem>
                    )
                })}
            </FavoritesGrid>
        </>
    )
}
