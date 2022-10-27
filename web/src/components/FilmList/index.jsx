import PropTypes from "prop-types"

import FilmsGrid from "../FilmsGrid"
import FilmsSlider from "../FilmsSlider"

export default function FilmList({
    url,
    title,
    isSlider,
    onClickAll,
    onClose,
    isAccordion,
    favoritesList,
    onClickTag,
}) {
    return (
        <>
            {isSlider ? (
                <FilmsSlider onClickAll={onClickAll} url={url} title={title} />
            ) : (
                <FilmsGrid
                    url={url}
                    title={title}
                    onClose={onClose}
                    isAccordion={isAccordion}
                    favoritesList={favoritesList}
                    onClickTag={onClickTag}
                />
            )}
        </>
    )
}

FilmsGrid.propTypes = {
    title: PropTypes.string,
    url: PropTypes.string,
    isSlider: PropTypes.bool,
    onClickAll: PropTypes.func,
    onClose: PropTypes.func,
    isAccordion: PropTypes.bool,
    favoritesList: PropTypes.array,
    onClickTag: PropTypes.func,
}

FilmsGrid.defaultProps = {
    title: "",
    url: "",
    isSlider: false,
    onClickAll: undefined,
    onClose: undefined,
    isAccordion: false,
    favoritesList: [],
    onClickTag: undefined,
}
