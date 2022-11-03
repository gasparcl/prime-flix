import { useEffect, useState } from "react"

import toast from "react-hot-toast"

import formatter from "../../services/formatter"
import { IMAGE_URL } from "../../consts/apiFetch"

import {
    Card,
    CardActionArea,
    CardMedia,
    Paper,
    Typography,
    useMediaQuery,
    useTheme,
} from "@material-ui/core"
import { Rating } from "@material-ui/lab"
import Loader from "../../components/Loader"
import TextBox from "../TextBox"
import FavoriteButton from "../Buttons/Favorite"
import { DetailsImage } from "./styles"

// ╔╦╗╔═╗╔╦╗╔═╗╔╦╗╔═╗╔╦╗╔═╗
// ║║║║╣  ║ ╠═╣ ║║╠═╣ ║ ╠═╣
// ╩ ╩╚═╝ ╩ ╩ ╩═╩╝╩ ╩ ╩ ╩ ╩
const GET_RATINGS_VALUE = (current) => current.vote_average.toFixed(1)

export default function FilmDetails({ current, isFavorite, onAddToFavorites }) {
    // ╦ ╦╔═╗╔═╗╦╔═╔═╗
    // ╠═╣║ ║║ ║╠╩╗╚═╗
    // ╩ ╩╚═╝╚═╝╩ ╩╚═╝
    const [trailerVideoId, setTrailerVideoId] = useState("")
    const [loading, setLoading] = useState(true)
    const theme = useTheme()
    const IS_MOBILE = useMediaQuery(theme.breakpoints.down("xs"))

    const getReleaseYear = current.release_date.split("-").shift()

    useEffect(() => {
        const getTrailerVideo = async () => {
            await fetch(
                `https://www.googleapis.com/youtube/v3/search?snippet&q=${current.title} ${getReleaseYear} trailer&key=${process.env.REACT_APP_YOUTUBE_API_KEY}&maxResults=15`, // Get inside .env.example, into app root, to know how to configure your credentials
            )
                .then((response) => response.json())
                .then((data) => setTrailerVideoId(data.items[0].id.videoId))
                .catch(() =>
                    toast.error(
                        "There was a problem to load trailer...\n Try later",
                    ),
                )
                .finally(() => {
                    setLoading(false)
                })
        }
        getTrailerVideo()
    }, [current.title, getReleaseYear])

    // ╔╦╗╔═╗╦╔╗╔
    // ║║║╠═╣║║║║
    // ╩ ╩╩ ╩╩╝╚╝
    return (
        <>
            <DetailsImage
                className="w-100 rounded-2"
                src={`${IMAGE_URL}${
                    current.backdrop_path
                        ? current.backdrop_path
                        : current.poster_path
                }`}
                alt={current.title}
            />
            <TextBox variant="h6" className="mt-1 text-uppercase">
                {current.title}
            </TextBox>
            <Paper className="pb-3 bg-transparent rounded-2 w-100">
                <TextBox
                    variant="body1"
                    className="d-flex justify-content-center align-items-center"
                >
                    <div className="d-inline-flex gap-2 justify-content-center align-items-center bg-dark bg-opacity-25 text-body p-1 px-2 rounded-pill">
                        <Typography variant="h6" style={{ color: "#fff" }}>
                            Ratings:
                        </Typography>
                        <Typography
                            variant="h6"
                            style={{ color: "#fff" }}
                        >{`${GET_RATINGS_VALUE(current)} / 10.00`}</Typography>
                        <Rating
                            defaultValue={0}
                            value={GET_RATINGS_VALUE(current) / 2}
                            max={5}
                            precision={0.5}
                            readOnly
                            style={{ marginBottom: "2px" }}
                        />
                    </div>
                </TextBox>
                <div className="px-2">
                    <TextBox variant="body1">
                        <b>Overview: </b>
                        {current.overview}
                    </TextBox>
                    <TextBox variant="body2">
                        <b>Release Date: </b>
                        {formatter(current.release_date).toSimpleDate()}
                    </TextBox>
                    <TextBox variant="body1">
                        <b>Trailer: </b>
                    </TextBox>
                </div>

                {loading ? (
                    <Loader />
                ) : (
                    <Card className="mb-3 bg-dark bg-opacity-25">
                        <CardActionArea>
                            <CardMedia
                                component="iframe"
                                src={`https://www.youtube.com/embed/${trailerVideoId}`}
                                height={400}
                            />
                        </CardActionArea>
                    </Card>
                )}
                <div
                    className={`d-flex align-items-center px-2 ${
                        IS_MOBILE
                            ? "justify-content-center"
                            : "justify-content-end"
                    }`}
                >
                    <FavoriteButton
                        label="Add to favorites"
                        iconSize="small"
                        isFavorite={isFavorite}
                        onToggleFavorites={onAddToFavorites}
                    />
                </div>
            </Paper>
        </>
    )
}
