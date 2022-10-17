import React from "react"
import PropTypes from "prop-types"
import { Typography } from "@material-ui/core"
import { FilmBox, FilmContent, FilmLink, FilmMedia } from "./styles"
import { IMAGE_URL } from "../../consts/apiFetch"

// ╔╦╗╔═╗╔╦╗╔═╗╔╦╗╔═╗╔╦╗╔═╗
// ║║║║╣  ║ ╠═╣ ║║╠═╣ ║ ╠═╣
// ╩ ╩╚═╝ ╩ ╩ ╩═╩╝╩ ╩ ╩ ╩ ╩

export default function FavoritesCard({ favoriteData, imageHeight }) {

    // ╔╦╗╔═╗╦╔╗╔
    // ║║║╠═╣║║║║
    // ╩ ╩╩ ╩╩╝╚╝
    return (
        <FilmBox>
            <FilmLink to={`/movie/${favoriteData.id}`} className="col-12">
                <FilmMedia
                    component="img"
                    alt={favoriteData.title}
                    height={imageHeight}
                    image={`${IMAGE_URL}${favoriteData.poster_path}`}
                    title={favoriteData.title}
                />
                <FilmContent className="bg-body rounded-bottom">
                    <Typography
                        gutterBottom
                        variant="h5"
                        component="h2"
                        className="titleMaxLines text-body"
                    >
                        {favoriteData.title}
                    </Typography>
                    <Typography
                        variant="body2"
                        color="textSecondary"
                        component="p"
                        className="description"
                    >
                        {favoriteData.overview}
                    </Typography>
                </FilmContent>     
            </FilmLink>
        </FilmBox>
    )
}

FavoritesCard.propTypes = {
    imageHeight: PropTypes.oneOfType([
        PropTypes.number,
        PropTypes.oneOf(["auto"]),
    ]),
}

FavoritesCard.defaultProps = {
    favoriteData: [],
    imageHeight: "auto",
}
