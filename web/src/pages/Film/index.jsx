import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"

import toast from "react-hot-toast"

import api from "../../services/api"
import { isFavoritedFilm } from "../../services/utils"
import usePersistedState from "../../hooks/usePersistedState"
import { FAVORITE_STORAGE_KEY } from "../../consts/storage"
import { FETCH_PARAMS } from "../../consts/apiFetch"
import { apiEndPoints } from "../../consts/apiEndPoints"

import { confirmation } from "../../components/Confirmation"
import Loader from "../../components/Loader"
import PageTitle from "../../components/PageTitle"
import FilmDetails from "../../components/FilmDetails"
import DefaultContainer from "../../components/DefaultContainer"

// ╔╦╗╔═╗╔╦╗╔═╗╔╦╗╔═╗╔╦╗╔═╗
// ║║║║╣  ║ ╠═╣ ║║╠═╣ ║ ╠═╣
// ╩ ╩╚═╝ ╩ ╩ ╩═╩╝╩ ╩ ╩ ╩ ╩
//
// Note: You have to create your api_key to fetch movies from API, to test the application - see more here: src/environments/development/development.js

export default function Film() {
    // ╦ ╦╔═╗╔═╗╦╔═╔═╗
    // ╠═╣║ ║║ ║╠╩╗╚═╗
    // ╩ ╩╚═╝╚═╝╩ ╩╚═╝
    const { id } = useParams()
    const navigation = useNavigate()

    const [currentMovie, setCurrentMovie] = useState({})
    const [favorites, setFavorites] = usePersistedState(
        FAVORITE_STORAGE_KEY,
        [],
    )
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        async function loadFilm() {
            await api
                .get(apiEndPoints.movies.movie(id), {
                    params: FETCH_PARAMS,
                })
                .then((response) => {
                    const movieData = response.data
                    setCurrentMovie(movieData)
                })
                .catch(() => {
                    navigation("/", { replace: true })
                })
                .finally(() => {
                    setLoading(false)
                })
        }
        loadFilm()
    }, [id, navigation])

    // ╦ ╦╔═╗╔╗╔╔╦╗╦  ╔═╗╦═╗╔═╗
    // ╠═╣╠═╣║║║ ║║║  ║╣ ╠╦╝╚═╗
    // ╩ ╩╩ ╩╝╚╝═╩╝╩═╝╚═╝╩╚═╚═╝
    const handleToggleFavorites = async (currentMovie) => {
        if (isFavoritedFilm(favorites, currentMovie)) {
            const confirmed = await confirmation.open(
                "Confirmation",
                `Do you really want to remove: "${currentMovie.title}"?`,
                {
                    agreeLabel: "Remove",
                },
            )

            if (confirmed) {
                let filteredFavorites = favorites.filter(
                    (favorite) => favorite.id !== currentMovie.id,
                )
                setFavorites(filteredFavorites)

                toast.success(
                    `Film removed from favorites:\n"${currentMovie.title}"`,
                )
            }
        } else {
            let newFavoritedFilm = [...favorites, currentMovie]

            setFavorites(newFavoritedFilm)

            toast.success(`Film added to favorites:\n"${currentMovie.title}"`)
        }
    }

    const isFavorite = isFavoritedFilm(favorites, currentMovie)

    if (loading) return <Loader />

    return (
        <DefaultContainer smPadding>
            <PageTitle description="Movie Details" upperCase centered />
            <div className="d-flex flex-column justify-content-center align-items-center rounded-2 pt-2 pb-4">
                <FilmDetails
                    current={currentMovie}
                    isFavorite={isFavorite}
                    onAddToFavorites={() => handleToggleFavorites(currentMovie)}
                />
            </div>
        </DefaultContainer>
    )
}
