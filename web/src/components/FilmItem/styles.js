import styled from "styled-components"

import { CardMedia } from "@material-ui/core"

export const FilmMedia = styled(CardMedia)`
    &.MuiCardMedia-img {
        object-fit: cover;
        min-height: 375px;
    }
`

export const HoverDiv = styled.div`
    position: absolute;
    display: flex;
    flex-direction: column;
    justify-content: end;
    align-items: center;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    cursor: pointer;
    transition: all 0.35s;
    opacity: 0;
    border-radius: 0.5rem;

    &:hover {
        background: rgba(0, 0, 0, 0.3);
        opacity: 1;
    }

    .content {
        background: linear-gradient(
            180deg,
            rgba(0, 0, 0, 0.05),
            rgba(0, 0, 0, 0.9)
        );
        padding: 0 0.5rem;
        border-radius: 0.5rem;
    }

    .description {
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 5;
        -webkit-box-orient: vertical;
        color: #fff;
        margin-bottom: -0.75rem;
    }

    .titleMaxLines {
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
        color: #fff;
    }
`
