import React from "react"
import { Link } from "react-router-dom"
import PropTypes from "prop-types"
import { isFavoritedFilm } from "../../services/utils"

import { Typography, CardActions } from "@material-ui/core"

import {
    CollapseCard,
    Details,
    FilmContent,
    FilmMedia,
    Summary,
} from "./styles"
import { makeStyles } from "@material-ui/core/styles"
import { IMAGE_URL } from "../../consts/apiFetch"
import FavoriteButton from "../Buttons/Favorite"
import LearnMoreButton from "../Buttons/LearnMore"

// ╔╦╗╔═╗╔╦╗╔═╗╔╦╗╔═╗╔╦╗╔═╗
// ║║║║╣  ║ ╠═╣ ║║╠═╣ ║ ╠═╣
// ╩ ╩╚═╝ ╩ ╩ ╩═╩╝╩ ╩ ╩ ╩ ╩

// ╔═╗╔╦╗╦ ╦╦  ╔═╗╔═╗
// ╚═╗ ║ ╚╦╝║  ║╣ ╚═╗
// ╚═╝ ╩  ╩ ╩═╝╚═╝╚═╝
const useStyles = makeStyles((theme) => ({
    root: {
        width: "100%",
        position: "relative",
    },
    heading: {
        fontSize: theme.typography.pxToRem(15),
        fontWeight: theme.typography.fontWeightRegular,
    },
}))

export default function FilmsCard({
    filmData,
    imageHeight,
    favoritesList,
    onClickTag,
    ...props
}) {
    const classes = useStyles()

    const isFavorite = favoritesList
        ? isFavoritedFilm(favoritesList, filmData)
        : false

    // ╔╦╗╔═╗╦╔╗╔
    // ║║║╠═╣║║║║
    // ╩ ╩╩ ╩╩╝╚╝
    return (
        <div className={classes.root}>
            <CollapseCard {...props}>
                <Summary aria-controls="panel1a-content" id="panel1a-header">
                    <FilmMedia
                        component="img"
                        alt={filmData.title}
                        height={imageHeight}
                        image={`${IMAGE_URL}${
                            filmData.poster_path
                                ? filmData.poster_path
                                : filmData.backdrop_path
                        }`}
                        title={filmData.title}
                        className="rounded rounded-1"
                    />
                </Summary>
                <Details>
                    <FilmContent>
                        <Typography
                            variant="h6"
                            component="h2"
                            className="titleMaxLines text-white"
                        >
                            <b>{filmData.title}</b>
                        </Typography>
                        <Typography
                            variant="body2"
                            component="p"
                            className="description text-white"
                        >
                            {filmData.overview}
                        </Typography>
                    </FilmContent>
                </Details>
                <CardActions>
                    <Link to={`/movie/${filmData.id}`} className="col-12">
                        <LearnMoreButton>Learn More</LearnMoreButton>
                    </Link>
                </CardActions>
            </CollapseCard>
            {onClickTag && (
                <FavoriteButton
                    isTag
                    isFavorite={isFavorite}
                    onToggleFavorites={onClickTag}
                />
            )}
        </div>
    )
}

FilmsCard.propTypes = {
    imageHeight: PropTypes.oneOfType([
        PropTypes.number,
        PropTypes.oneOf(["auto"]),
    ]),
    favoritesList: PropTypes.array,
    onClickTag: PropTypes.bool,
}

FilmsCard.defaultProps = {
    filmData: [],
    imageHeight: "auto",
    favoritesList: [],
    onClickTag: false,
}
