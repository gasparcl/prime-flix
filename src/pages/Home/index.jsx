import { useLayoutEffect, useState } from "react"

import api from "../../services/api"
import { FETCH_PARAMS } from "../../environments/development/development"

import { Grid } from "@material-ui/core"
import FilmsCard from "../../components/FilmsCard"
import { MoviesGrid } from "./styles"
import Loader from "../../components/Loader"
import PageTitle from "../../components/PageTitle"
import { apiEndPoints } from "../../consts/apiEndPoints"

// ╔╦╗╔═╗╔╦╗╔═╗╔╦╗╔═╗╔╦╗╔═╗
// ║║║║╣  ║ ╠═╣ ║║╠═╣ ║ ╠═╣
// ╩ ╩╚═╝ ╩ ╩ ╩═╩╝╩ ╩ ╩ ╩ ╩
//
// Note: You have to create your api_key to fetch movies from API, to test the application - see more here: src/environments/development/development.js

export default function Home() {
    // ╦ ╦╔═╗╔═╗╦╔═╔═╗
    // ╠═╣║ ║║ ║╠╩╗╚═╗
    // ╩ ╩╚═╝╚═╝╩ ╩╚═╝
    const [filmes, setFilmes] = useState([])
    const [loading, setLoading] = useState(true)

    useLayoutEffect(() => {
        async function loadFilmes() {
            const response = await api.get(apiEndPoints.movies.nowPlaying, {
                params: FETCH_PARAMS,
            })
            const listaFilmes = response.data.results
            const sliceListaFilmes = listaFilmes.slice(0, 12)

            setFilmes(sliceListaFilmes)
            setLoading(false)
        }
        loadFilmes()
    }, [])

    if (loading) return <Loader />
    else {
        return (
            <>
                <PageTitle description="Lançamentos" upperCase />
                <MoviesGrid container spacing={1}>
                    {filmes.map((filme) => {
                        return (
                            <Grid item xs={3} key={filme.id}>
                                <FilmsCard filmeData={filme} />
                            </Grid>
                        )
                    })}
                </MoviesGrid>
            </>
        )
    }
}
