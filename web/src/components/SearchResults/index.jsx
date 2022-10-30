import React, { useLayoutEffect, useState } from "react"

import { toast } from "react-hot-toast"

import api from "../../services/api"
import { apiEndPoints } from "../../consts/apiEndPoints"
import { FETCH_PARAMS } from "../../consts/apiFetch"

import FilmItem from "../FilmItem"
import { StyledGrid, StyledGridItem } from "../FilmsGrid/styles"
import Pagination from "../Pagination"
import Loader from "../Loader"

import { ResultsDialog } from "./styles"

// ╔╦╗╔═╗╔╦╗╔═╗╔╦╗╔═╗╔╦╗╔═╗
// ║║║║╣  ║ ╠═╣ ║║╠═╣ ║ ╠═╣
// ╩ ╩╚═╝ ╩ ╩ ╩═╩╝╩ ╩ ╩ ╩ ╩
const FETCH_URL = apiEndPoints.search.movie

// Setting fetch delay time on api
let SEARCH_DELAY_TIME = 1000 * 1 // 1 second

export default function SearchResults({
    search,
    onClose,
    onCancel,
    loadingSearch,
    ...props
}) {
    // ╦ ╦╔═╗╔═╗╦╔═╔═╗
    // ╠═╣║ ║║ ║╠╩╗╚═╗
    // ╩ ╩╚═╝╚═╝╩ ╩╚═╝
    const [loading, setLoading] = useState(false)
    const [results, setResults] = useState([])
    const [noResult, setNoResult] = useState(false)
    const [page, setPage] = useState(1)
    const [paginationData, setPaginationData] = useState({})

    useLayoutEffect(() => {
        if (FETCH_URL) {
            setLoading(true)

            const apiParams = {
                ...FETCH_PARAMS,
                page,
                query: search,
            }

            let timeOut = undefined
            timeOut = setTimeout(() => {
                api.get(FETCH_URL, { params: { ...apiParams } })
                    .then((response) => {
                        const resultsList = response.data.results
                        const paginationData = {
                            currentPage: response.data.page,
                            totalItems: response.data.total_results,
                            totalPages: response.data.total_pages,
                        }
                        // Setting a noResult state
                        if (resultsList.length === 0) setNoResult(true)
                        else setNoResult(false)

                        // Setting Data
                        setResults(resultsList)
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
                        setResults([])
                    })
                    .finally(() => setLoading(false))
            }, SEARCH_DELAY_TIME)

            return () => clearTimeout(timeOut)
        }
    }, [page, search])

    // ╦ ╦╔═╗╔╗╔╔╦╗╦  ╔═╗╦═╗╔═╗
    // ╠═╣╠═╣║║║ ║║║  ║╣ ╠╦╝╚═╗
    // ╩ ╩╩ ╩╝╚╝═╩╝╩═╝╚═╝╩╚═╚═╝
    const handleChangePage = (_, newPage) => {
        setLoading(true)
        setPage(newPage)
    }

    const hasResults = results.length > 0
    const hasPagination = paginationData.totalPages > 1

    return (
        <>
            {hasResults && (
                <ResultsDialog
                    title={
                        !loadingSearch &&
                        `${paginationData.totalItems} - results for the search: "${search}"...`
                    }
                    fullWidth
                    fullScreen
                    open={hasResults}
                    onCancel={onCancel}
                    maxWidth="lg"
                    disagreeColor="#fff"
                    disagreeLabel={!loadingSearch && "close"}
                    disagreeVariant={!loadingSearch ? "outlined" : "text"}
                >
                    {loadingSearch ? (
                        <Loader />
                    ) : (
                        <>
                            {loading ? (
                                <Loader className="ResultsLoader" />
                            ) : (
                                <>
                                    <StyledGrid container spacing={2}>
                                        <>
                                            {results.map((result) => {
                                                return (
                                                    <StyledGridItem
                                                        item
                                                        xs={3}
                                                        key={result.id}
                                                        {...props}
                                                    >
                                                        <FilmItem
                                                            filmData={result}
                                                            onClose={onClose}
                                                        />
                                                    </StyledGridItem>
                                                )
                                            })}
                                        </>
                                    </StyledGrid>
                                </>
                            )}
                            {hasPagination && (
                                <Pagination
                                    totalPages={paginationData.totalPages}
                                    handleChange={handleChangePage}
                                    page={paginationData.currentPage}
                                />
                            )}
                        </>
                    )}
                </ResultsDialog>
            )}
            {noResult && (
                <ResultsDialog
                    title={
                        !loadingSearch &&
                        `0 - results for the search: "${search}"... Try searching for a different term.`
                    }
                    fullWidth
                    fullScreen
                    open={noResult}
                    onCancel={onCancel}
                    maxWidth="lg"
                    disagreeColor="#fff"
                    disagreeLabel={!loadingSearch && "close"}
                    disagreeVariant={!loadingSearch ? "outlined" : "text"}
                >
                    {loading ||
                        (loadingSearch && <Loader className="ResultsLoader" />)}
                </ResultsDialog>
            )}
        </>
    )
}
