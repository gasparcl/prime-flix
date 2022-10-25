import { Link, useLocation } from "react-router-dom"

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
                <div className="d-flex gap-5 justify-content-between align-items-center">
                    <Link to="/" className="logo">
                        <div className="logo__container">
                            <img
                                id="logoBrand"
                                alt="logo"
                                src={blackLogo}
                                className="logo-brand"
                            />
                        </div>
                    </Link>
                    <SearchBar />
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
