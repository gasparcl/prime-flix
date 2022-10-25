import React from "react"
import { Link, useLocation } from "react-router-dom"
import { ListItem, List, Typography } from "@material-ui/core"
import HeaderMenu from "./styles"
import whiteLogo from "../../assets/images/transp_black_logo.png"

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

    // ╦ ╦╔═╗╔═╗╦╔═╔═╗
    // ╠═╣║ ║║ ║╠╩╗╚═╗
    // ╩ ╩╚═╝╚═╝╩ ╩╚═╝
    const location = useLocation()
    const locationPath = location.pathname

    // ╔╦╗╔═╗╔╦╗╦ ╦╔═╗╔╦╗╔═╗
    // ║║║║╣  ║ ╠═╣║ ║ ║║╚═╗
    // ╩ ╩╚═╝ ╩ ╩ ╩╚═╝═╩╝╚═╝
    const isActivePage = (link) => link === locationPath

    return (
        <HeaderMenu>
            <div className="header">
                <Link to="/" className="logo">
                    <img alt="logo" src={whiteLogo} className="logo-brand" />
                </Link>
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
                                >
                                    <Typography
                                        variant="body1"
                                        style={
                                            isActivePage(item.link)
                                                ? { transform: "scale(1.3)" }
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
