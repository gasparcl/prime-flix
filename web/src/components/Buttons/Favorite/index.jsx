import PropTypes from "prop-types"

import FavoriteIcon from "@material-ui/icons/Favorite"
import { FavoriteBtn } from "../styles"
/**
 * App Favorite Button component
 *
 * Used to add or remove Films Items to Favorites LocalStorage key
 *
 * @export
 * @param {{
 *      isFavorite: boolean,
 *      isTag: boolean,
 *      onToggleFavorites: () => void,
 *      iconSize: string,
 *      label: string,
 * }} props - FavoriteButton props
 * @return {*}
 */
export default function FavoriteButton({
    isFavorite,
    isTag,
    onToggleFavorites,
    label,
    iconSize,
    disabled,
    ...props
}) {
    return (
        <>
            <FavoriteBtn
                className={`btn ${
                    isFavorite ? "btn-danger" : "btn-outline-danger"
                } ${isTag ? "favtag rounded-circle" : ""} ${
                    disabled ? "disabled" : ""
                } ${props.className}`}
                onClick={onToggleFavorites ? onToggleFavorites : undefined}
            >
                <span className="d-flex justify-content-around align-items-center gap-2">
                    <FavoriteIcon fontSize={iconSize} />
                    {label && <b>{label}</b>}
                </span>
            </FavoriteBtn>
        </>
    )
}

FavoriteButton.propTypes = {
    isFavorite: PropTypes.bool,
    onToggleFavorites: PropTypes.func,
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
    isTag: false,
    label: "",
    iconSize: "small",
}
