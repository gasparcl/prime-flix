import PropTypes from "prop-types"

import FavoriteIcon from "@material-ui/icons/Favorite"

/**
 * App Favorite Button component
 *
 * Used to add or remove Films Items to Favorites LocalStorage key
 *
 * @export
 * @param {{
 *      isFavorite: boolean,
 *      onToggleFavorites: () => void,
 *      iconSize: string,
 *      label: string,
 * }} props - FavoriteButton props
 * @return {*}
 */
export default function FavoriteButton({
    isFavorite,
    onToggleFavorites,
    label,
    iconSize,
    ...props
}) {
    return (
        <>
            <button
                className={`btn ${
                    isFavorite ? "btn-danger" : "btn-outline-danger"
                } ${props.className}`}
                onClick={onToggleFavorites}
            >
                <span className="d-flex justify-content-around align-items-center gap-2">
                    <FavoriteIcon fontSize="small" />
                    {label}
                </span>
            </button>
        </>
    )
}

FavoriteButton.propTypes = {
    isFavorite: PropTypes.bool,
    onToggleFavorites: PropTypes.func.isRequired,
    iconSize: PropTypes.oneOf([
        "default",
        "inherit",
        "large",
        "medium",
        "small",
    ]),
    label: PropTypes.string,
}

FavoriteButton.defaultProps = {
    isFavorite: false,
    label: "",
    iconSize: "medium",
}
