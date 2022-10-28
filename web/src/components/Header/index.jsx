import { useState } from "react"
import { Link, useLocation } from "react-router-dom"

import { ListItem, List, Typography } from "@material-ui/core"

import blackLogo from "../../assets/images/logo_transp.png"
import SearchBar from "../SearchBar"

import HeaderMenu from "./styles"

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

const SEARCH_CLOSE_DELAY_TIME = 1000 * 1.5 // 1.5 seconds

function Header() {
    // ╦ ╦╔═╗╔═╗╦╔═╔═╗
    // ╠═╣║ ║║ ║╠╩╗╚═╗
    // ╩ ╩╚═╝╚═╝╩ ╩╚═╝
    const location = useLocation()
    const locationPath = location.pathname
    const [search, setSearch] = useState("")

    // ╦ ╦╔═╗╔╗╔╔╦╗╦  ╔═╗╦═╗╔═╗
    // ╠═╣╠═╣║║║ ║║║  ║╣ ╠╦╝╚═╗
    // ╩ ╩╩ ╩╝╚╝═╩╝╩═╝╚═╝╩╚═╚═╝
    const handleClose = () => {
        setSearch("")
    }

    const handleSearchDelayClose = () => {
        let timeOut = undefined
        timeOut = setTimeout(() => {
            setSearch("")
        }, SEARCH_CLOSE_DELAY_TIME)

        return () => clearTimeout(timeOut)
    }

    const handleChange = (e) => {
        const searchValue = e.target.value
        setSearch(searchValue)
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
                        handleChange={handleChange}
                        handleClose={handleClose}
                        handleSearchDelayClose={handleSearchDelayClose}
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
