import { Link } from "react-router-dom"
import PropTypes from "prop-types"

import { IMAGE_URL } from "../../consts/apiFetch"

import { Typography } from "@material-ui/core"

import { ButtonIcon, DetailsButton, FilmMedia, HoverDiv } from "./styles"

export default function SliderItem({ itemData, imageHeight, ...props }) {
    // ╔╦╗╔═╗╦╔╗╔
    // ║║║╠═╣║║║║
    // ╩ ╩╩ ╩╩╝╚╝
    return (
        <div className={`position-relative ${props.className}`}>
            <FilmMedia
                component="img"
                alt={itemData.title}
                height={imageHeight}
                image={`${IMAGE_URL}${itemData.poster_path}`}
                title={itemData.title}
            />
            <HoverDiv>
                <div className="content">
                    <Typography
                        gutterBottom
                        variant="h6"
                        className="titleMaxLines"
                    >
                        {itemData.title}
                    </Typography>
                    <Typography
                        variant="body1"
                        component="p"
                        className="description"
                    >
                        {itemData.overview}
                    </Typography>
                    <Link to={`/movie/${itemData.id}`} className="col-12">
                        <DetailsButton className="btn btn-outline-danger">
                            <span className="d-flex align-items-center justify-content-center">
                                Learn More
                                <ButtonIcon fontSize="small" />
                            </span>
                        </DetailsButton>
                    </Link>
                </div>
            </HoverDiv>
        </div>
    )
}

SliderItem.propTypes = {
    imageHeight: PropTypes.oneOfType([
        PropTypes.number,
        PropTypes.oneOf(["auto"]),
    ]),
}

SliderItem.defaultProps = {
    item: [],
    imageHeight: "auto",
}
