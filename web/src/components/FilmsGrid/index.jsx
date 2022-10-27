import { useLayoutEffect, useState } from "react"
import PropTypes from "prop-types"
import toast from "react-hot-toast"

import api from "../../services/api"
import { FETCH_PARAMS } from "../../consts/apiFetch"

import FilmItem from "../FilmItem"
import FilmItemAccordion from "../FilmItemAccordion"
import PageTitle from "../PageTitle"
import Loader from "../Loader"
import { StyledGrid, StyledGridItem } from "./styles"

export default function FilmsGrid({
    title,
    url,
    onClose,
    isAccordion,
    favoritesList,
    onClickTag,
    ...props
}) {
    // ╦ ╦╔═╗╔═╗╦╔═╔═╗
    // ╠═╣║ ║║ ║╠╩╗╚═╗
    // ╩ ╩╚═╝╚═╝╩ ╩╚═╝
    const [loading, setLoading] = useState(true)
    const [films, setFilms] = useState([])
    const [page, setPage] = useState(1)

    useLayoutEffect(() => {
        async function loadFilms() {
            try {
                const response = await api.get(url, {
                    params: { page: page, ...FETCH_PARAMS },
                })
                const filmsList = response.data.results

                // Setting Data
                setFilms(filmsList)
            } catch (error) {
                toast.error(
                    `There's a problem loading films...
                    Code: ${error.code}\n
                    "Message: ${error.message}"`,
                    {
                        duration: 6000,
                    },
                )
            }
            setLoading(false)
        }
        loadFilms()
    }, [url, page])

    // ╦ ╦╔═╗╔╗╔╔╦╗╦  ╔═╗╦═╗╔═╗
    // ╠═╣╠═╣║║║ ║║║  ║╣ ╠╦╝╚═╗
    // ╩ ╩╩ ╩╝╚╝═╩╝╩═╝╚═╝╩╚═╚═╝
    const handleChangePage = (_, newPage) => {
        setPage(newPage)
        setChangingPage(true)
    }

    if (loading) return <Loader />

    return (
        <>
            {title && <PageTitle description={title} upperCase />}
            <StyledGrid container spacing={2}>
                {films.map((film) => {
                    return (
                        <StyledGridItem item xs={3} key={film.id} {...props}>
                            {isAccordion ? (
                                <FilmItemAccordion
                                    filmData={film}
                                    favoritesList={favoritesList}
                                    onClickTag={() => onClickTag(film)}
                                />
                            ) : (
                                <FilmItem filmData={film} onClose={onClose} />
                            )}
                        </StyledGridItem>
                    )
                })}
            </StyledGrid>
            {isChangingPage && (
                <Pagination
                    totalPages={totalPages}
                    handleChange={onChangePage}
                    page={currentPage}
                />
            )}
        </>
    )
}

FilmsGrid.propTypes = {
    title: PropTypes.string,
    url: PropTypes.string,
    onClose: PropTypes.func,
    isAccordion: PropTypes.bool,
    favoritesList: PropTypes.array,
    onClickTag: PropTypes.func,
}

FilmsGrid.defaultProps = {
    title: "",
    url: "",
    onClose: undefined,
    isAccordion: false,
    favoritesList: [],
    onClickTag: undefined,
}
