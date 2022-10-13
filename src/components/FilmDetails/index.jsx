import { IMAGE_URL } from "../../environments/development/development"
import formatter from "../../services/formatter"

import {
    Card,
    CardActionArea,
    CardMedia,
    Paper,
    Typography,
} from "@material-ui/core"
import { Rating } from "@material-ui/lab"
import TextBox from "../TextBox"

// ╔╦╗╔═╗╔╦╗╔═╗╔╦╗╔═╗╔╦╗╔═╗
// ║║║║╣  ║ ╠═╣ ║║╠═╣ ║ ╠═╣
// ╩ ╩╚═╝ ╩ ╩ ╩═╩╝╩ ╩ ╩ ╩ ╩
const GET_RATINGS_VALUE = (current) => current.vote_average.toFixed(1)

export default function FilmDetails({ current }) {
    // ╔╦╗╔═╗╦╔╗╔
    // ║║║╠═╣║║║║
    // ╩ ╩╩ ╩╩╝╚╝
    return (
        <>
            <TextBox variant="h4">{current.title}</TextBox>
            <img
                className="w-100 rounded-2"
                src={`${IMAGE_URL}${current.backdrop_path}`}
                alt={current.title}
            />
            <Paper className="py-3 px-5 bg-dark bg-opacity-25 rounded-2">
                <TextBox
                    variant="body1"
                    className="d-flex justify-content-center align-items-center"
                >
                    <div className="d-inline-flex gap-2 justify-content-center align-items-center bg-light text-body p-1 px-2 rounded-pill">
                        <Typography variant="h6">Ratings:</Typography>
                        <Typography variant="h6">{`${GET_RATINGS_VALUE(
                            current,
                        )} / 10.00`}</Typography>
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
                <Card>
                    <CardActionArea>
                        <CardMedia
                            component="iframe"
                            src="https://www.youtube.com/embed/u1GDl8xldqE"
                            height={400}
                        />
                    </CardActionArea>
                </Card>
                <div className="d-flex align-items-center justify-content-end">
                    <button className="btn btn-outline-danger">
                        Add to favorites
                    </button>
                </div>
            </Paper>
        </>
    )
}

fetch(
    "https://www.googleapis.com/youtube/v3/search?q='Dragon Ball Super: Super Hero trailer'&key=AIzaSyCEe9mV4Tgjx2vqJRXXTS6rKEmRx6jemBA",
).then((response) => console.log(response.url))
