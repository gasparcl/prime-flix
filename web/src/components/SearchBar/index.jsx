import { useState, useEffect } from "react"

import api from "../../services/api"
import { apiEndPoints } from "../../consts/apiEndPoints"
import { FETCH_PARAMS } from "../../consts/apiFetch"

import { InputAdornment } from "@material-ui/core"
import { SearchOutlined } from "@material-ui/icons"

import FilmsCard from "../../components/FilmsCard"

import {
    ResultsDialog,
    ResultsGrid,
    ResultGridItem,
    StyledSearchBar,
} from "./styles"
import SearchResults from "../SearchResults"

// ╔╦╗╔═╗╔╦╗╔═╗╔╦╗╔═╗╔╦╗╔═╗
// ║║║║╣  ║ ╠═╣ ║║╠═╣ ║ ╠═╣
// ╩ ╩╚═╝ ╩ ╩ ╩═╩╝╩ ╩ ╩ ╩ ╩
const SEARCH_DELAY_TIME = 1000 * 1 // 1 seconds

export default function SearchBar() {
    // ╦ ╦╔═╗╔═╗╦╔═╔═╗
    // ╠═╣║ ║║ ║╠╩╗╚═╗
    // ╩ ╩╚═╝╚═╝╩ ╩╚═╝
    const [search, setSearch] = useState("")
    const [results, setResults] = useState([])
    const [open, setOpen] = useState(false)
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        let timeOut = undefined
        const value = search

        if (value) {
            setLoading(true)

            timeOut = setTimeout(() => {
                api.get(apiEndPoints.search.movie, {
                    params: { query: value, ...FETCH_PARAMS },
                })
                    .then((response) => setResults(response.data.results))
                    .catch(() => setResults([]))
                    .finally(() => setLoading(false))
            }, SEARCH_DELAY_TIME)
        }

        return () => clearTimeout(timeOut)
    }, [search])

    console.log(results)

    // ╦ ╦╔═╗╔╗╔╔╦╗╦  ╔═╗╦═╗╔═╗
    // ╠═╣╠═╣║║║ ║║║  ║╣ ╠╦╝╚═╗
    // ╩ ╩╩ ╩╝╚╝═╩╝╩═╝╚═╝╩╚═╚═╝
    const handleOpen = () => {
        if (search) setOpen(true)
    }

    const handleClose = () => {
        setSearch("")
        setResults([])
        setOpen(false)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        handleOpen()
    }

    const handleChange = async (e) => {
        const searchValue = await e.target.value
        setSearch(searchValue)
    }

    return (
        <>
            <form noValidate onSubmit={handleSubmit}>
                <StyledSearchBar
                    id="outlined-search"
                    fullWidth
                    label="Find your movies here..."
                    type="search"
                    variant="outlined"
                    value={search}
                    onChange={handleChange}
                    margin="dense"
                    InputProps={{
                        endAdornment: (
                            <InputAdornment position="end">
                                <SearchOutlined />
                            </InputAdornment>
                        ),
                    }}
                />
            </form>
            {results && (
                <ResultsDialog
                    title={`Results for the search: "${search}"`}
                    fullWidth
                    fullScreen
                    open={open}
                    onCancel={handleClose}
                    maxWidth="lg"
                    disagreeColor="#fff"
                    disagreeLabel="close"
                    disagreeVariant="outlined"
                >
                    <SearchResults resultsData={results} />
                </ResultsDialog>
            )}
        </>
    )
}
