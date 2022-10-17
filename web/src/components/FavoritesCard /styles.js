import { Link } from "react-router-dom"
import styled from "styled-components"

import {
    Box,
    CardContent,
    CardMedia,
} from "@material-ui/core"

export const FilmBox = styled(Box)`
`

export const FilmLink = styled(Link)`
    text-decoration: none;
    height: 0;
    display: inline-block;
`

export const FilmContent = styled(CardContent)`
    transform: translateY(-100%);
    z-index: 0;
    transition: all 0.5s;
    border-radius: 0.375rem;

    &.MuiCardContent-root {
        padding: 0.5rem;
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

export const FilmMedia = styled(CardMedia)`
    border-radius: 0.375rem;
    z-index: 10;
    position: relative;
    &.MuiCardMedia-img {
        object-fit: cover;
    }

    &:hover ~ .MuiCardContent-root {
        transform: translateY(0%);
        transition: all 0.5s;
        position: relative;
    }
`
