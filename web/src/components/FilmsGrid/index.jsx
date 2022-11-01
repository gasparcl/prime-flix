import { useLayoutEffect, useState } from "react"
import PropTypes from "prop-types"
import toast from "react-hot-toast"
import { useMediaQuery, useTheme, Typography } from "@material-ui/core"
import { Skeleton } from "@material-ui/lab"

import api from "../../services/api"
import { FETCH_PARAMS } from "../../consts/apiFetch"

import FilmItem from "../FilmItem"
import FilmItemAccordion from "../FilmItemAccordion"
import PageTitle from "../PageTitle"
import Pagination from "../Pagination"
import { StyledGrid, StyledGridItem } from "./styles"

export default function FilmsGrid({
    title,
    url,
    onClose,
    favoritesList,
    onClickTag,
    showRegisters,
    hasParagraphBottom,
    ...props
}) {
    // ╦ ╦╔═╗╔═╗╦╔═╔═╗
    // ╠═╣║ ║║ ║╠╩╗╚═╗
    // ╩ ╩╚═╝╚═╝╩ ╩╚═╝
    const [loading, setLoading] = useState(false)
    const [films, setFilms] = useState([])
    const [page, setPage] = useState(1)
    const [paginationData, setPaginationData] = useState({})
    const theme = useTheme()
    const IS_TABLET_XL = useMediaQuery(theme.breakpoints.between("sm", "md"))
    const IS_MOBILE = useMediaQuery(theme.breakpoints.down("xs"))

    useLayoutEffect(() => {
        if (url) {
            setLoading(true)

            const apiParams = {
                ...FETCH_PARAMS,
                page,
            }

            api.get(url, { params: { ...apiParams } })
                .then((response) => {
                    const filmsList = response.data.results
                    const paginationData = {
                        currentPage: response.data.page,
                        totalItems: response.data.total_results,
                        totalPages: response.data.total_pages,
                    }

                    // Setting Data
                    setFilms(filmsList)
                    setPaginationData(paginationData)
                })
                .catch((error) => {
                    toast.error(
                        `There's a problem loading results...
                        Code: ${error.code}\n
                        "Message: ${error.message}"`,
                        {
                            duration: 6000,
                        },
                    )
                    setFilms([])
                })
                .finally(() => setLoading(false))
        }
    }, [url, page])

    // ╦ ╦╔═╗╔╗╔╔╦╗╦  ╔═╗╦═╗╔═╗
    // ╠═╣╠═╣║║║ ║║║  ║╣ ╠╦╝╚═╗
    // ╩ ╩╩ ╩╝╚╝═╩╝╩═╝╚═╝╩╚═╚═╝
    const handleChangePage = (_, newPage) => {
        setLoading(true)
        setPage(newPage)
    }

    // ╔═╗╔═╗╔═╗╦╔╗╔╔═╗╔╦╗╦╔═╗╔╗╔
    // ╠═╝╠═╣║ ╦║║║║╠═╣ ║ ║║ ║║║║
    // ╩  ╩ ╩╚═╝╩╝╚╝╩ ╩ ╩ ╩╚═╝╝╚╝
    const favoritesTotalItems = favoritesList.length
    const favoritesItemPerPage = 20
    const favoritesTotalPages = Math.ceil(
        favoritesTotalItems / favoritesItemPerPage,
    )

    const hasPagination =
        paginationData.totalPages > 1 || favoritesTotalPages > 1

    return (
        <>
            {title && (
                <>
                    <PageTitle
                        description={`${title} ${
                            showRegisters ? " - All " : ""
                        }`}
                        upperCase
                        hasParagraph={hasParagraphBottom ? true : false}
                    />
                    {showRegisters && (
                        <Typography
                            variant={IS_MOBILE || IS_TABLET_XL ? "body1" : "h6"}
                            align={
                                IS_MOBILE || IS_TABLET_XL ? "left" : "center"
                            }
                            paragraph
                            style={{ color: "#fff" }}
                        >
                            {paginationData?.totalItems} movies found
                        </Typography>
                    )}
                </>
            )}
            <StyledGrid container spacing={2}>
                {favoritesList && (
                    <>
                        {favoritesList.map((favorite) => {
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
                                        onClickTag={() => onClickTag(favorite)}
                                        className="rounded-2"
                                    />
                                </StyledGridItem>
                            )
                        })}
                    </>
                )}
                {url && (
                    <>
                        {films.map((film) => {
                            return (
                                <StyledGridItem
                                    item
                                    xs={12}
                                    sm={6}
                                    md={3}
                                    key={film.id}
                                    {...props}
                                >
                                    {loading ? (
                                        <Skeleton
                                            variant="rect"
                                            className="rounded-2"
                                        >
                                            <FilmItem
                                                filmData={film}
                                                onClose={onClose}
                                            />
                                        </Skeleton>
                                    ) : (
                                        <FilmItem
                                            filmData={film}
                                            onClose={onClose}
                                        />
                                    )}
                                </StyledGridItem>
                            )
                        })}
                    </>
                )}
            </StyledGrid>
            {hasPagination && (
                <Pagination
                    totalPages={
                        paginationData.totalPages || favoritesTotalPages
                    }
                    handleChange={handleChangePage}
                    page={paginationData.currentPage}
                />
            )}
        </>
    )
}

FilmsGrid.propTypes = {
    title: PropTypes.string,
    url: PropTypes.string,
    onClose: PropTypes.func,
    favoritesList: PropTypes.array,
    onClickTag: PropTypes.func,
    showRegisters: PropTypes.bool,
    hasParagraphBottom: PropTypes.bool,
}

FilmsGrid.defaultProps = {
    title: "",
    url: "",
    onClose: undefined,
    favoritesList: [],
    onClickTag: undefined,
    showRegisters: false,
    hasParagraphBottom: false,
}
