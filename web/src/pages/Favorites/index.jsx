import toast from "react-hot-toast"

import usePersistedState from "../../hooks/usePersistedState"
import { isFavoritedFilm } from "../../services/utils"
import { FAVORITE_STORAGE_KEY } from "../../consts/storage"

import PageTitle from "../../components/PageTitle"
import FilmsCard from "../../components/FilmsCard"
import { confirmation } from "../../components/Confirmation"
import { FavoriteGridItem, FavoritesGrid } from "./styles"

export default function Favorites() {
    // ╦ ╦╔═╗╔═╗╦╔═╔═╗
    // ╠═╣║ ║║ ║╠╩╗╚═╗
    // ╩ ╩╚═╝╚═╝╩ ╩╚═╝
    const [favorites, setFavorites] = usePersistedState(
        FAVORITE_STORAGE_KEY,
        [],
    )

    // ╦ ╦╔═╗╔╗╔╔╦╗╦  ╔═╗╦═╗╔═╗
    // ╠═╣╠═╣║║║ ║║║  ║╣ ╠╦╝╚═╗
    // ╩ ╩╩ ╩╝╚╝═╩╝╩═╝╚═╝╩╚═╚═╝
    const handleToggleFavorites = async (current) => {
        if (isFavoritedFilm(favorites, current)) {
            const confirmed = await confirmation.open(
                "Confirmation",
                `Do you really want to remove: "${current.title}"?`,
                {
                    agreeLabel: "Remove",
                },
            )

            if (confirmed) {
                let filteredFavorites = favorites.filter(
                    (favorite) => favorite.id !== current.id,
                )
                setFavorites(filteredFavorites)

                toast.success(
                    `Film removed from favorites:\n"${current.title}"`,
                )
            }
        } else {
            let newFavoritedFilm = [...favorites, current]

            setFavorites(newFavoritedFilm)

            toast.success(`Film added to favorites:\n"${current.title}"`)
        }
    }

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
                            <FilmsCard
                                filmData={favorite}
                                onClickTag={() =>
                                    handleToggleFavorites(favorite)
                                }
                                favoritesList={favorites}
                            />
                        </FavoriteGridItem>
                    )
                })}
            </FavoritesGrid>
        </>
    )
}
