import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

import api from "../../services/api"
import {
    API_KEY,
    FETCH_LANGUAGE,
    FETCH_PARAMS,
} from "../../environments/development/development"
import { apiEndPoints } from "../../consts/apiEndPoints"

import Loader from "../../components/Loader"
import PageTitle from "../../components/PageTitle"

// ╔╦╗╔═╗╔╦╗╔═╗╔╦╗╔═╗╔╦╗╔═╗
// ║║║║╣  ║ ╠═╣ ║║╠═╣ ║ ╠═╣
// ╩ ╩╚═╝ ╩ ╩ ╩═╩╝╩ ╩ ╩ ╩ ╩
//
// Note: You have to create your api_key to fetch movies from API, to test the application - see more here: src/environments/development/development.js

export default function Filme() {
    // ╦ ╦╔═╗╔═╗╦╔═╔═╗
    // ╠═╣║ ║║ ║╠╩╗╚═╗
    // ╩ ╩╚═╝╚═╝╩ ╩╚═╝
    const { id } = useParams()
    const [currentMovie, setCurrentMovie] = useState({})
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        async function loadFilme() {
            const response = await api
                .get(apiEndPoints.movies.movie(id), {
                    params: FETCH_PARAMS,
                })
                .then(() => {
                    const movieData = response.data
                    setCurrentMovie(movieData)
                })
                .catch(() => {
                    console.log("FILME NAO ENCONTRADO")
                })
                .finally(() => {
                    setLoading(false)
                })
        }
        loadFilme()
    }, [])

    if (loading) return <Loader />

    return (
        <>
            <PageTitle description="Filme" upperCase />
        </>
    )
}
