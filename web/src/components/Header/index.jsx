import { useState, useEffect } from "react"
import { Link, useLocation } from "react-router-dom"

import api from "../../services/api"
import { apiEndPoints } from "../../consts/apiEndPoints"
import { FETCH_PARAMS } from "../../consts/apiFetch"

import { ListItem, List, Typography } from "@material-ui/core"

import blackLogo from "../../assets/images/logo_transp.png"
import SearchBar from "../SearchBar"

import HeaderMenu from "./styles"

function Header() {
    // ╔╦╗╔═╗╔╦╗╔═╗╔╦╗╔═╗╔╦╗╔═╗
    // ║║║║╣  ║ ╠═╣ ║║╠═╣ ║ ╠═╣
    // ╩ ╩╚═╝ ╩ ╩ ╩═╩╝╩ ╩ ╩ ╩ ╩
    const headerLinks = [
        { name: "Home", link: "/" },
        {
            name: "Favorites",
            link: "/favorites",
        },
    ]
    const SEARCH_DELAY_TIME = 1000 * 1 // 1 seconds
    const SEARCH_CLOSE_DELAY_TIME = 1000 * 1.5 // 1.5 seconds

    // ╦ ╦╔═╗╔═╗╦╔═╔═╗
    // ╠═╣║ ║║ ║╠╩╗╚═╗
    // ╩ ╩╚═╝╚═╝╩ ╩╚═╝
    const location = useLocation()
    const locationPath = location.pathname
    const [search, setSearch] = useState("")
    const [results, setResults] = useState([])
    const [loading, setLoading] = useState(false)
    const [page, setPage] = useState(1)
    const [paginationData, setPaginationData] = useState({})
    const [changingPage, setChangingPage] = useState(true)

    useEffect(() => {
        let timeOut = undefined
        const value = search.trim()
        const hasSearch = value.length > 0

        if (hasSearch) {
            setLoading(true)

            timeOut = setTimeout(() => {
                api.get(apiEndPoints.search.movie, {
                    params: {
                        query: value,
                        page: page,
                        ...FETCH_PARAMS,
                    },
                })
                    .then((response) => {
                        setPaginationData({
                            currentPage: response.data.page,
                            totalItems: response.data.total_results,
                            totalPages: response.data.total_pages,
                        })
                        setResults(response.data.results)
                    })
                    .catch(() => setResults([]))
                    .finally(() => setLoading(false))
            }, SEARCH_DELAY_TIME)
        }

        return () => clearTimeout(timeOut)
    }, [search, page])

    // ╦ ╦╔═╗╔╗╔╔╦╗╦  ╔═╗╦═╗╔═╗
    // ╠═╣╠═╣║║║ ║║║  ║╣ ╠╦╝╚═╗
    // ╩ ╩╩ ╩╝╚╝═╩╝╩═╝╚═╝╩╚═╚═╝
    const handleClose = () => {
        setSearch("")
        setResults([])
        setPage(1)
        setChangingPage(true)
    }

    const handleSearchDelayClose = () => {
        let timeOut = undefined
        setChangingPage(false)
        setLoading(true)

        timeOut = setTimeout(() => {
            setSearch("")
            setResults([])
            setPage(1)
            setLoading(false)
        }, SEARCH_CLOSE_DELAY_TIME)
    }

    const handleChange = (e) => {
        const searchValue = e.target.value
        setSearch(searchValue)
    }

    const handleChangePage = (_, newPage) => {
        setPage(newPage)
        setChangingPage(true)
    }

    // ╔╦╗╔═╗╔╦╗╦ ╦╔═╗╔╦╗╔═╗
    // ║║║║╣  ║ ╠═╣║ ║ ║║╚═╗
    // ╩ ╩╚═╝ ╩ ╩ ╩╚═╝═╩╝╚═╝
    const isActivePage = (link) => link === locationPath

    return (
        <HeaderMenu>
            <div className="header">
                <div className="d-flex gap-5 justify-content-between align-items-center">
                    <Link
                        to="/"
                        className="logo"
                        onClick={handleSearchDelayClose}
                    >
                        <div className="logo__container">
                            <img
                                id="logoBrand"
                                alt="logo"
                                src={blackLogo}
                                className="logo-brand"
                            />
                        </div>
                    </Link>
                    <SearchBar
                        search={search}
                        results={results}
                        isLoading={loading}
                        handleChange={handleChange}
                        handleClose={handleClose}
                        handleSearchDelayClose={handleSearchDelayClose}
                        paginationData={paginationData}
                        onChangePage={handleChangePage}
                        isChangingPage={changingPage}
                    />
                </div>
                <List>
                    {headerLinks.map((item, key) => {
                        return (
                            <ListItem key={key}>
                                <Link
                                    to={item.link}
                                    style={
                                        isActivePage(item.link)
                                            ? {
                                                  color: "#fff",
                                              }
                                            : {
                                                  undefined,
                                              }
                                    }
                                    onClick={
                                        isActivePage(item.link)
                                            ? handleClose
                                            : handleSearchDelayClose
                                    }
                                >
                                    <Typography
                                        variant="body1"
                                        style={
                                            isActivePage(item.link)
                                                ? {
                                                      transform: "scale(1.2)",
                                                  }
                                                : { undefined }
                                        }
                                    >
                                        {item.name}
                                    </Typography>
                                </Link>
                            </ListItem>
                        )
                    })}
                </List>
            </div>
        </HeaderMenu>
    )
}

export default Header
