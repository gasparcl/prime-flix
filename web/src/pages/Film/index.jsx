import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"

import toast from "react-hot-toast"

import api from "../../services/api"
import usePersistedState from "../../hooks/usePersistedState"
import { FAVORITE_STORAGE_KEY } from "../../consts/storage"
import { FETCH_PARAMS } from "../../consts/apiFetch"
import { apiEndPoints } from "../../consts/apiEndPoints"

import { Container } from "@material-ui/core"
import Loader from "../../components/Loader"
import PageTitle from "../../components/PageTitle"
import FilmDetails from "../../components/FilmDetails"

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
    const [favorites, setFavorites] = usePersistedState(FAVORITE_STORAGE_KEY, [])
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
    const isFavoritedFilm = favorites.some(
        (favorite) => favorite.id === currentMovie.id,
    )

    const handleAddToFavorites = () => {
        if (!isFavoritedFilm && currentMovie !== {}) {
            let newFavoriteFilms = [...favorites, currentMovie]

            setFavorites(newFavoriteFilms)
            localStorage.setItem(
                FAVORITE_STORAGE_KEY,
                JSON.stringify(newFavoriteFilms),
            )
            toast.success("Film added to favorites")
        } else {
            toast.error("Film already added to favorites")
        }
    }

    if (loading) return <Loader />

    return (
        <>
            <PageTitle description="Movie Details" upperCase />
            <Container maxWidth="md" className="mt-4">
                <div className="d-flex flex-column justify-content-center align-items-center bg-dark bg-opacity-25 rounded-2 pt-2 pb-4 px-sm-2 px-lg-5">
                    <FilmDetails
                        current={currentMovie}
                        isFavorite={isFavoritedFilm}
                        onAddToFavorites={handleAddToFavorites}
                    />
                </div>
            </Container>
        </>
    )
}