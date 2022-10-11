import React, { useLayoutEffect, useState } from "react"
import api from "../../services/api"

import { Grid } from "@material-ui/core"
import FilmsCard from "../../components/FilmsCard"
import { MoviesGrid } from "./styles"
import Loader from "../../components/Loader"
import PageTitle from "../../components/PageTitle"

// ╔╦╗╔═╗╔╦╗╔═╗╔╦╗╔═╗╔╦╗╔═╗
// ║║║║╣  ║ ╠═╣ ║║╠═╣ ║ ╠═╣
// ╩ ╩╚═╝ ╩ ╩ ╩═╩╝╩ ╩ ╩ ╩ ╩
const API_KEY = "70ab36e8e150acd65f04064fb59504ec"
const FETCH_LANGUAGE = "en-US"

export default function Home() {
    // ╦ ╦╔═╗╔═╗╦╔═╔═╗
    // ╠═╣║ ║║ ║╠╩╗╚═╗
    // ╩ ╩╚═╝╚═╝╩ ╩╚═╝
    const [filmes, setFilmes] = useState([])
    const [loading, setLoading] = useState(true)

    useLayoutEffect(() => {
        async function loadFilmes() {
            const response = await api.get("movie/now_playing", {
                params: {
                    api_key: API_KEY,
                    language: FETCH_LANGUAGE,
                    page: 1,
                },
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
