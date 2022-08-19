import React, { useEffect, useState } from "react";
import api from "../../services/api";

import { Grid, Typography } from "@material-ui/core";
import { MoviesGrid } from "./styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";

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
                            <Card>
                                <CardActionArea>
                                    <CardMedia
                                        component="img"
                                        alt="Contemplative Reptile"
                                        height="140"
                                        image=""
                                        title="Contemplative Reptile"
                                    />
                                    <CardContent>
                                        <Typography
                                            gutterBottom
                                            variant="h5"
                                            component="h2"
                                        >
                                            Lizard
                                        </Typography>
                                        <Typography
                                            variant="body2"
                                            color="textSecondary"
                                            component="p"
                                        >
                                            Lizards are a widespread group of
                                            squamate reptiles, with over 6,000
                                            species, ranging across all
                                            continents except Antarctica
                                        </Typography>
                                    </CardContent>
                                </CardActionArea>
                                <CardActions>
                                    <Button size="small" color="primary">
                                        Share
                                    </Button>
                                    <Button size="small" color="primary">
                                        Learn More
                                    </Button>
                                </CardActions>
                            </Card>
                        </Grid>
                    );
                })}
            </MoviesGrid>
        </>
    );
}
