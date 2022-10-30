import { useLayoutEffect, useState } from "react"
import PropTypes from "prop-types"
import toast from "react-hot-toast"

import api from "../../services/api"
import { FETCH_PARAMS } from "../../consts/apiFetch"

import FilmItem from "../FilmItem"
import FilmItemAccordion from "../FilmItemAccordion"
import PageTitle from "../PageTitle"
import Loader from "../Loader"
import Pagination from "../Pagination"
import { StyledGrid, StyledGridItem } from "./styles"

export default function FilmsGrid({
    title,
    url,
    onClose,
    favoritesList,
    onClickTag,
    ...props
}) {
    // ╦ ╦╔═╗╔═╗╦╔═╔═╗
    // ╠═╣║ ║║ ║╠╩╗╚═╗
    // ╩ ╩╚═╝╚═╝╩ ╩╚═╝
    const [loading, setLoading] = useState(false)
    const [films, setFilms] = useState([])
    const [page, setPage] = useState(1)
    const [paginationData, setPaginationData] = useState({})

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

    if (loading) return <Loader />

    return (
        <>
            {title && <PageTitle description={title} upperCase />}
            <StyledGrid container spacing={2}>
                {favoritesList && (
                    <>
                        {favoritesList.map((favorite) => {
                            return (
                                <StyledGridItem
                                    item
                                    xs={3}
                                    key={favorite.id}
                                    {...props}
                                >
                                    <FilmItemAccordion
                                        filmData={favorite}
                                        favoritesList={favoritesList}
                                        onClickTag={() => onClickTag(favorite)}
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
                                    xs={3}
                                    key={film.id}
                                    {...props}
                                >
                                    <FilmItem
                                        filmData={film}
                                        onClose={onClose}
                                    />
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
}

FilmsGrid.defaultProps = {
    title: "",
    url: "",
    onClose: undefined,
    favoritesList: [],
    onClickTag: undefined,
}
