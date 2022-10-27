import { Link } from "react-router-dom"
import PropTypes from "prop-types"

import usePersistedState from "../../hooks/usePersistedState"
import { IMAGE_URL } from "../../consts/apiFetch"
import { FAVORITE_STORAGE_KEY } from "../../consts/storage"
import { isFavoritedFilm } from "../../services/utils"

import { Typography } from "@material-ui/core"

import { FilmMedia, HoverDiv } from "./styles"
import LearnMoreButton from "../Buttons/LearnMore"
import FavoriteButton from "../Buttons/Favorite"

export default function FilmItem({ filmData, imageHeight, onClose, ...props }) {
    // ╦ ╦╔═╗╔═╗╦╔═╔═╗
    // ╠═╣║ ║║ ║╠╩╗╚═╗
    // ╩ ╩╚═╝╚═╝╩ ╩╚═╝
    // eslint-disable-next-line
    const [favorites, setFavorites] = usePersistedState(
        FAVORITE_STORAGE_KEY,
        [],
    )

    const isFavorite = isFavoritedFilm(favorites, filmData)

    // ╔╦╗╔═╗╦╔╗╔
    // ║║║╠═╣║║║║
    // ╩ ╩╩ ╩╩╝╚╝
    return (
        <div className={`position-relative ${props.className}`}>
            <FilmMedia
                component="img"
                alt={filmData.title}
                height={imageHeight}
                image={`${IMAGE_URL}${filmData.poster_path}`}
                title={filmData.title}
            />
            <HoverDiv>
                <div className="content">
                    <Typography
                        gutterBottom
                        variant="h6"
                        className="titleMaxLines"
                    >
                        <b>{filmData.title}</b>
                    </Typography>
                    <Typography
                        variant="body2"
                        component="p"
                        className="description"
                    >
                        {filmData.overview}
                    </Typography>
                    <Link
                        to={`/movie/${filmData.id}`}
                        onClick={onClose}
                        className="col-12"
                    >
                        <LearnMoreButton>Learn More</LearnMoreButton>
                    </Link>
                </div>
            </HoverDiv>
            {isFavorite && (
                <FavoriteButton isTag isFavorite={isFavorite} disabled />
            )}
        </div>
    )
}

FilmItem.propTypes = {
    imageHeight: PropTypes.oneOfType([
        PropTypes.number,
        PropTypes.oneOf(["auto"]),
    ]),
    onClose: PropTypes.func,
}

FilmItem.defaultProps = {
    item: [],
    imageHeight: "auto",
    onClose: undefined,
}
