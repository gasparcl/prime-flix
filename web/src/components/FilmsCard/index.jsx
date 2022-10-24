import React from "react"
import { Link } from "react-router-dom"
import PropTypes from "prop-types"
import { Typography, CardActions, Accordion } from "@material-ui/core"
import { Details, FilmContent, FilmMedia, Summary } from "./styles"
import { makeStyles } from "@material-ui/core/styles"
import { IMAGE_URL } from "../../consts/apiFetch"

// ╔╦╗╔═╗╔╦╗╔═╗╔╦╗╔═╗╔╦╗╔═╗
// ║║║║╣  ║ ╠═╣ ║║╠═╣ ║ ╠═╣
// ╩ ╩╚═╝ ╩ ╩ ╩═╩╝╩ ╩ ╩ ╩ ╩

// ╔═╗╔╦╗╦ ╦╦  ╔═╗╔═╗
// ╚═╗ ║ ╚╦╝║  ║╣ ╚═╗
// ╚═╝ ╩  ╩ ╩═╝╚═╝╚═╝
const useStyles = makeStyles((theme) => ({
    root: {
        width: "100%",
    },
    heading: {
        fontSize: theme.typography.pxToRem(15),
        fontWeight: theme.typography.fontWeightRegular,
    },
}))

export default function FilmsCard({ filmData, imageHeight, ...props }) {
    const classes = useStyles()

    // ╔╦╗╔═╗╦╔╗╔
    // ║║║╠═╣║║║║
    // ╩ ╩╩ ╩╩╝╚╝
    return (
        <div className={classes.root}>
            <Accordion {...props}>
                <Summary aria-controls="panel1a-content" id="panel1a-header">
                    <FilmMedia
                        component="img"
                        alt={filmData.title}
                        height={imageHeight}
                        image={`${IMAGE_URL}${filmData.poster_path}`}
                        title={filmData.title}
                    />
                </Summary>
                <Details>
                    <FilmContent>
                        <Typography
                            gutterBottom
                            variant="h5"
                            component="h2"
                            className="titleMaxLines"
                        >
                            {filmData.title}
                        </Typography>
                        <Typography
                            variant="body2"
                            color="textSecondary"
                            component="p"
                            className="description"
                        >
                            {filmData.overview}
                        </Typography>
                    </FilmContent>
                </Details>
                <CardActions>
                    <Link to={`/movie/${filmData.id}`} className="col-12">
                        <button className="col-12 btn btn-outline-danger">
                            Learn More
                        </button>
                    </Link>
                </CardActions>
            </Accordion>
        </div>
    )
}

FilmsCard.propTypes = {
    imageHeight: PropTypes.oneOfType([
        PropTypes.number,
        PropTypes.oneOf(["auto"]),
    ]),
}

FilmsCard.defaultProps = {
    filmData: [],
    imageHeight: "auto",
}
