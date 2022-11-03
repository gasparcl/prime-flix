import { useState } from "react"

import PropTypes from "prop-types"
import { useMediaQuery, useTheme } from "@material-ui/core"

import { paginateFromArr, scrollTop } from "../../services/utils"

import FilmItemAccordion from "../FilmItemAccordion"
import PageTitle from "../PageTitle"
import Pagination from "../Pagination"
import Loader from "../Loader"
import { StyledGrid, StyledGridItem } from "./styles"

// ╔╦╗╔═╗╔╦╗╔═╗╔╦╗╔═╗╔╦╗╔═╗
// ║║║║╣  ║ ╠═╣ ║║╠═╣ ║ ╠═╣
// ╩ ╩╚═╝ ╩ ╩ ╩═╩╝╩ ╩ ╩ ╩ ╩
const LOADING_FAVORITES_PAGE_TIMEOUT = 1000 * 0.75 // 0.75 seconds

export default function FavoritesGrid({
    title,
    favoritesList,
    onClickTag,
    hasParagraphBottom,
    ...props
}) {
    // ╦ ╦╔═╗╔═╗╦╔═╔═╗
    // ╠═╣║ ║║ ║╠╩╗╚═╗
    // ╩ ╩╚═╝╚═╝╩ ╩╚═╝
    const [loading, setLoading] = useState(false)
    const [favoritesPage, setFavoritesPage] = useState(0)
    const theme = useTheme()
    const IS_MOBILE = useMediaQuery(theme.breakpoints.down("xs"))

    // ╦ ╦╔═╗╔╗╔╔╦╗╦  ╔═╗╦═╗╔═╗
    // ╠═╣╠═╣║║║ ║║║  ║╣ ╠╦╝╚═╗
    // ╩ ╩╩ ╩╝╚╝═╩╝╩═╝╚═╝╩╚═╚═╝
    const handleChangePage = (_, newPage) => {
        setLoading(true)
        setFavoritesPage(newPage)

        scrollTop()
        // set lazy loading timeout
        let timeOut = undefined
        timeOut = setTimeout(() => {
            setLoading(false)
        }, LOADING_FAVORITES_PAGE_TIMEOUT)

        return () => clearTimeout(timeOut)
    }

    // Filtering favoristesList - removing movies without photos
    favoritesList = favoritesList.filter(
        (favorite) => !!favorite.backdrop_path || !!favorite.poster_path,
    )

    // ╔═╗╔═╗╔═╗╦╔╗╔╔═╗╔╦╗╦╔═╗╔╗╔
    // ╠═╝╠═╣║ ╦║║║║╠═╣ ║ ║║ ║║║║
    // ╩  ╩ ╩╚═╝╩╝╚╝╩ ╩ ╩ ╩╚═╝╝╚╝
    const favoritesItemPerPage = 12
    const favoritesPagination =
        paginateFromArr(favoritesList, favoritesItemPerPage) || []
    const favoritesTotalPages = favoritesPagination.length

    const hasPagination = favoritesTotalPages > 1
    const currentPage = favoritesPage === 0 ? favoritesPage + 1 : favoritesPage

    return (
        <>
            {title && (
                <PageTitle
                    description={title}
                    upperCase
                    hasParagraph={hasParagraphBottom ? true : false}
                />
            )}
            <>
                {loading ? (
                    <div className="d-flex justify-content-center align-items-center">
                        <Loader
                            className={
                                IS_MOBILE
                                    ? "ResultsLoader__mobile"
                                    : "ResultsLoader"
                            }
                        />
                    </div>
                ) : (
                    <>
                        <StyledGrid container spacing={2}>
                            {favoritesPagination[
                                favoritesPage !== 0
                                    ? favoritesPage - 1
                                    : favoritesPage
                            ].map((favorite) => {
                                return (
                                    <StyledGridItem
                                        item
                                        xs={12}
                                        sm={6}
                                        md={3}
                                        key={favorite.id}
                                        className="rounded-2"
                                        {...props}
                                    >
                                        <FilmItemAccordion
                                            filmData={favorite}
                                            favoritesList={favoritesList}
                                            onClickTag={() =>
                                                onClickTag(favorite)
                                            }
                                            className="rounded-2"
                                        />
                                    </StyledGridItem>
                                )
                            })}
                        </StyledGrid>
                    </>
                )}
            </>
            {hasPagination && (
                <Pagination
                    totalPages={favoritesTotalPages}
                    handleChange={handleChangePage}
                    page={currentPage}
                />
            )}
        </>
    )
}

FavoritesGrid.propTypes = {
    title: PropTypes.string,
    favoritesList: PropTypes.array,
    onClickTag: PropTypes.func,
    hasParagraphBottom: PropTypes.bool,
}

FavoritesGrid.defaultProps = {
    title: "",
    favoritesList: [],
    onClickTag: undefined,
    hasParagraphBottom: false,
}
