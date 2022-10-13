import { useLayoutEffect, useState } from "react"

import api from "../../services/api"
import { apiEndPoints } from "../../consts/apiEndPoints"
import { FETCH_PARAMS } from "../../environments/development/development"

import { Grid } from "@material-ui/core"
import FilmsCard from "../../components/FilmsCard"
import Loader from "../../components/Loader"
import PageTitle from "../../components/PageTitle"
import { MoviesGrid } from "./styles"

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
        async function loadFilmes() {
            const response = await api.get(apiEndPoints.movies.nowPlaying, {
                params: FETCH_PARAMS,
            })
            const filmsList = response.data.results
            const slicedFilmsList = filmsList.slice(0, 12)

            setFilms(slicedFilmsList)
            setLoading(false)
        }
        loadFilmes()
    }, [])

    if (loading) return <Loader />
    else {
        return (
            <>
                <PageTitle description="Releases" upperCase />
                <MoviesGrid container spacing={1}>
                    {films.map((film) => {
                        return (
                            <Grid item xs={3} key={film.id}>
                                <FilmsCard filmData={film} />
                            </Grid>
                        )
                    })}
                </MoviesGrid>
            </>
        )
    }
}
