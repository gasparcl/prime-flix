import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import api from "../../services/api";

import { Grid, Typography } from "@material-ui/core";
import FilmsCard from "../../components/FilmsCard";
import { MoviesGrid } from "./styles";
import Loader from "../../components/Loader";

// ▒█▀▄▀█ ▒█▀▀▀ ▀▀█▀▀ ░█▀▀█ ▒█▀▀▄ ░█▀▀█ ▀▀█▀▀ ░█▀▀█
// ▒█▒█▒█ ▒█▀▀▀ ░▒█░░ ▒█▄▄█ ▒█░▒█ ▒█▄▄█ ░▒█░░ ▒█▄▄█
// ▒█░░▒█ ▒█▄▄▄ ░▒█░░ ▒█░▒█ ▒█▄▄▀ ▒█░▒█ ░▒█░░ ▒█░▒█

export default function Home() {
    // ▒█░▒█ ▒█▀▀▀█ ▒█▀▀▀█ ▒█░▄▀ ▒█▀▀▀█
    // ▒█▀▀█ ▒█░░▒█ ▒█░░▒█ ▒█▀▄░ ░▀▀▀▄▄
    // ▒█░▒█ ▒█▄▄▄█ ▒█▄▄▄█ ▒█░▒█ ▒█▄▄▄█
    const [filmes, setFilmes] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function loadFilmes() {
            const response = await api.get("movie/now_playing", {
                params: {
                    api_key: "70ab36e8e150acd65f04064fb59504ec",
                    language: "en-US",
                    page: 1,
                },
            });
            const listaFilmes = response.data.results;
            console.log(listaFilmes);
            const sliceListaFilmes = listaFilmes.slice(0, 10);
            setFilmes(sliceListaFilmes);
            setLoading(false);
        }

        loadFilmes();
    }, []);

    if (loading) {
        return (
            <>
                <Loader />
            </>
        );
    }

    return (
        <>
            <Typography variant="h5" style={{ color: "#fff" }}>
                LANÇAMENTOS
            </Typography>
            <MoviesGrid container spacing={1}>
                {filmes.map((filme) => {
                    return (
                        <Grid item xs={3} key={filme.id}>
                            <FilmsCard filmeData={filme} />
                        </Grid>
                    );
                })}
            </MoviesGrid>
        </>
    );
}
