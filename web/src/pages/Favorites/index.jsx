import { useState } from "react"

import toast from "react-hot-toast"

import usePersistedState from "../../hooks/usePersistedState"
import { isFavoritedFilm } from "../../services/utils"
import { FAVORITE_STORAGE_KEY } from "../../consts/storage"

import PageTitle from "../../components/PageTitle"
import { confirmation } from "../../components/Confirmation"
import Loader from "../../components/Loader"
import { FavoritesGrid } from "./styles"

// ╔╦╗╔═╗╔╦╗╔═╗╔╦╗╔═╗╔╦╗╔═╗
// ║║║║╣  ║ ╠═╣ ║║╠═╣ ║ ╠═╣
// ╩ ╩╚═╝ ╩ ╩ ╩═╩╝╩ ╩ ╩ ╩ ╩
const LOADING_FAVORITES_PAGE_TIMEOUT = 1000 * 0.75 // 0.75 seconds

export default function Favorites() {
    // ╦ ╦╔═╗╔═╗╦╔═╔═╗
    // ╠═╣║ ║║ ║╠╩╗╚═╗
    // ╩ ╩╚═╝╚═╝╩ ╩╚═╝
    const [favorites, setFavorites] = usePersistedState(
        FAVORITE_STORAGE_KEY,
        [],
    )
    const [loading, setLoading] = useState(true)

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

    const handleLazyLoading = () => {
        let timeOut = undefined

        timeOut = setTimeout(() => {
            setLoading(false)
        }, LOADING_FAVORITES_PAGE_TIMEOUT)

        return () => clearTimeout(timeOut)
    }

    // ╔╦╗╔═╗╦╔╗╔
    // ║║║╠═╣║║║║
    // ╩ ╩╩ ╩╩╝╚╝
    return (
        <>
            {handleLazyLoading()}
            <PageTitle description="" upperCase />
            {loading ? (
                <Loader />
            ) : (
                <FavoritesGrid
                    title={"Favorited Films"}
                    favoritesList={favorites}
                    onClickTag={handleToggleFavorites}
                />
            )}
        </>
    )
}
