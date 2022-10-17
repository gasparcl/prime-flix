import usePersistedState from "../../hooks/usePersistedState"
import { FAVORITE_STORAGE_KEY } from "../../consts/storage"

import PageTitle from "../../components/PageTitle"
import FavoritesCard from "../../components/FavoritesCard "
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
            <FavoritesGrid container spacing={1}>
                {favorites.map((favorite) => {
                    return (
                        <FavoriteGridItem item xs={3} key={favorite.id}>
                            <FavoritesCard favoriteData={favorite} />
                        </FavoriteGridItem>
                    )
                })}
            </FavoritesGrid>
        </>
    )
}
