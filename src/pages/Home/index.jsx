import React, { useEffect, useState } from "react";
import api from "../../services/api";

import { Grid, Typography } from "@material-ui/core";
import { MoviesGrid } from "./styles";

export default function Home() {
    const [filmes, setFilmes] = useState([]);

    useEffect(() => {
        async function loadFilmes() {
            const response = await api.get("movie/now_playing", {
                params: {
                    api_key: "70ab36e8e150acd65f04064fb59504ec",
                    language: "pt-BR",
                    page: 1,
                },
            });
            const listaFilmes = response.data.results;
            const sliceListaFilmes = listaFilmes.slice(0, 10);
            setFilmes(sliceListaFilmes);
        }

        loadFilmes();
    }, [filmes]);

    return (
        <>
            <Typography variant="h4">Prime-Flix Video</Typography>
            <MoviesGrid container spacing={2}>
                {filmes.map((filme) => {
                    return (
                        <Grid item xs={6} key={filme.id}>
                            <Typography variant="h5" color="primary">
                                {filme.title}
                            </Typography>
                        </Grid>
                    );
                })}
            </MoviesGrid>
        </>
    );
}
