import React from "react";
import { Link, useLocation } from "react-router-dom";
import { ListItem, List, Typography } from "@material-ui/core";
import HeaderMenu from "./styles";

function Header() {
    // █▀▄▀█ █▀▀ ▀█▀ ▄▀█ █▀▄ ▄▀█ ▀█▀ ▄▀█
    // █░▀░█ ██▄ ░█░ █▀█ █▄▀ █▀█ ░█░ █▀█

    const headerLinks = [
        { name: "Home", link: "/" },
        {
            name: "Favoritos",
            link: "/filme/:id",
        },
    ];

    // █░█ █▀█ █▀█ █▄▀ █▀
    // █▀█ █▄█ █▄█ █░█ ▄█

    const location = useLocation();
    const locationPath = location.pathname;

    // █▀▄▀█ █▀▀ ▀█▀ █░█ █▀█ █▀▄ █▀
    // █░▀░█ ██▄ ░█░ █▀█ █▄█ █▄▀ ▄█
    const isActivePage = (link) => link === locationPath;

    return (
        <HeaderMenu>
            <div className="header">
                <Link to="/" className="logo">
                    <Typography variant="h4" className="logo-text">
                        PRIME-FLIX
                    </Typography>
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
                                                ? { transform: "scale(1.6)" }
                                                : { undefined }
                                        }
                                    >
                                        {item.name}
                                    </Typography>
                                </Link>
                            </ListItem>
                        );
                    })}
                </List>
            </div>
        </HeaderMenu>
    );
}

export default Header;
