import { Link } from "react-router-dom"
import styled from "styled-components"

import { Box, CardContent, CardMedia } from "@material-ui/core"

export const FilmBox = styled(Box)`
    transition: all 0.5s;
`

export const FilmLink = styled(Link)`
    text-decoration: none;
    display: block;
    transition: all 0.5s;
    max-height: 307.5px;
    transition-delay: 0.5s;

    &:hover {
        max-height: 700px;
        transition: all 0.75s;
    }

    &:hover .MuiCardContent-root {
        transform: translateY(0%);
        transition: all 0.5s;
        position: relative;
    }
`

export const FilmMedia = styled(CardMedia)`
    border-radius: 0.375rem 0.375rem 0.1rem 0.1rem;
    z-index: 10;
    position: relative;
    transition: all 0.5s;
    &.MuiCardMedia-img {
        object-fit: cover;
        height: 350px;
        min-height: auto;
        transition: all 0.5s;
    }
`

export const FilmContent = styled(CardContent)`
    transform: translateY(-100%);
    z-index: 0;
    transition: all 0.5s;
    border-radius: 0 0 0.375rem 0.375rem;

    &.MuiCardContent-root {
        padding: 0.5rem;
        transition: all 0.5s;
    }
    .description {
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 5;
        -webkit-box-orient: vertical;
    }

    .titleMaxLines {
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
        min-height: 64px;
    }
`
