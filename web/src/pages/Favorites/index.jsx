import { useState } from "react"

import toast from "react-hot-toast"
import { useMediaQuery, useTheme } from "@material-ui/core"

import usePersistedState from "../../hooks/usePersistedState"
import { isFavoritedFilm } from "../../services/utils"
import { FAVORITE_STORAGE_KEY } from "../../consts/storage"

import { confirmation } from "../../components/Confirmation"
import { FavoriteGrid } from "./styles"
import FavoritesSkeleton from "./Skeleton"
import Loader from "../../components/Loader"

// ╔╦╗╔═╗╔╦╗╔═╗╔╦╗╔═╗╔╦╗╔═╗
// ║║║║╣  ║ ╠═╣ ║║╠═╣ ║ ╠═╣
// ╩ ╩╚═╝ ╩ ╩ ╩═╩╝╩ ╩ ╩ ╩ ╩
const LOADING_FAVORITES_PAGE_TIMEOUT = 1000 * 1.25 // 1.25 seconds

export default function Favorites() {
    // ╦ ╦╔═╗╔═╗╦╔═╔═╗
    // ╠═╣║ ║║ ║╠╩╗╚═╗
    // ╩ ╩╚═╝╚═╝╩ ╩╚═╝
    const theme = useTheme()
    const IS_MOBILE = useMediaQuery(theme.breakpoints.down("xs"))

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

    handleLazyLoading()

    // ╔╦╗╔═╗╦╔╗╔
    // ║║║╠═╣║║║║
    // ╩ ╩╩ ╩╩╝╚╝
    return (
        <>
            {loading ? (
                <>
                    {!IS_MOBILE ? (
                        <FavoritesSkeleton totalItems={favorites} />
                    ) : (
                        <Loader className="ResultsLoader__mobile" />
                    )}
                </>
            ) : (
                <FavoriteGrid
                    title={"Favorited Films"}
                    favoritesList={favorites}
                    onClickTag={handleToggleFavorites}
                    hasParagraphBottom
                />
            )}
        </>
    )
}
