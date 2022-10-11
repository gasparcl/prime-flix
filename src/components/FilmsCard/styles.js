import styled from "styled-components"

import {
    AccordionDetails,
    AccordionSummary,
    CardContent,
    CardMedia,
} from "@material-ui/core"

export const Summary = styled(AccordionSummary)`
    &.MuiAccordionSummary-root {
        padding: 0;
    }
    .MuiAccordionSummary-content {
        margin: 2px 0;
    }
`

export const Details = styled(AccordionDetails)`
    &.MuiAccordionDetails-root {
        display: flex;
        padding: 8px 16px 0px;
    }
`

export const FilmContent = styled(CardContent)`
    &.MuiCardContent-root {
        padding: 0;
    }
    &.MuiCardContent-root:last-child {
        padding-bottom: 0;
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
    }
`

export const FilmMedia = styled(CardMedia)`
    &.MuiCardMedia-img {
        object-fit: cover;
    }
`
