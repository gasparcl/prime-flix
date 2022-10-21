import { useLayoutEffect, useState } from "react"

import api from "../../services/api"
import { apiEndPoints } from "../../consts/apiEndPoints"
import { FETCH_PARAMS } from "../../consts/apiFetch"

import toast from "react-hot-toast"

import FilmsCard from "../../components/FilmsCard"
import Loader from "../../components/Loader"
import PageTitle from "../../components/PageTitle"
import { MoviesGrid, MoviesGridItem } from "./styles"
import Slider from "../../components/slider"

// ╔╦╗╔═╗╔╦╗╔═╗╔╦╗╔═╗╔╦╗╔═╗
// ║║║║╣  ║ ╠═╣ ║║╠═╣ ║ ╠═╣
// ╩ ╩╚═╝ ╩ ╩ ╩═╩╝╩ ╩ ╩ ╩ ╩
//
// Note: You have to create your api_key to fetch movies from API, to test the application - see more here: src/environments/development/development.js

export default function Home() {
    // ╦ ╦╔═╗╔═╗╦╔═╔═╗
    // ╠═╣║ ║║ ║╠╩╗╚═╗
    // ╩ ╩╚═╝╚═╝╩ ╩╚═╝
    const [films, setFilms] = useState([])
    const [loading, setLoading] = useState(true)

    useLayoutEffect(() => {
        async function loadFilms() {
            try {
                const response = await api.get(apiEndPoints.movies.nowPlaying, {
                    params: FETCH_PARAMS,
                })
                const filmsList = response.data.results
                setFilms(filmsList)
            } catch (error) {
                toast.error(
                    `There's a problem loading films...
                    Code: ${error.code}\n
                    "Message: ${error.message}"`,
                    {
                        duration: 6000,
                    },
                )
            } finally {
                setLoading(false)
            }
        }
        loadFilms()
    }, [])

    if (loading) return <Loader />
    else {
        return (
            <>
                <PageTitle description="Releases" upperCase />
                <Slider data={films} />
            </>
        )
    }
}
