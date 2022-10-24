import styled from "styled-components"

import {
    Accordion,
    AccordionDetails,
    AccordionSummary,
    CardContent,
    CardMedia,
} from "@material-ui/core"

export const CollapseCard = styled(Accordion)`
    .MuiCollapse-root {
        background: #222;
    }
`

export const Summary = styled(AccordionSummary)`
    &.MuiAccordionSummary-root {
        padding: 0;
        background: #222;
    }
    .MuiAccordionSummary-content {
        margin: 0;
        transition: all 0.35s;
    }
    .MuiAccordionSummary-content.Mui-expanded {
        margin: 0;
        transition: all 0.35s;
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
        min-height: 55px;
        line-height: 1.2;
    }
`

export const FilmMedia = styled(CardMedia)`
    &.MuiCardMedia-img {
        object-fit: cover;
    }
`
