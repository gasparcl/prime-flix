import styled from "styled-components"
import { DoubleArrowOutlined } from "@material-ui/icons"

export const DetailsButton = styled.button`
    width: 100%;

    &:hover .MuiSvgIcon-root {
        left: 0.45rem;
        transition: all 0.25s;
    }

    &:hover .backbutton {
        left: -0.45rem;
    }
`

export const ButtonIcon = styled(DoubleArrowOutlined)`
    position: relative;
    left: 0.25rem;

    &.backbutton {
        transform: rotate(180deg);
        left: -0.25rem;
    }
`

export const FavoriteBtn = styled.button`
    &.favtag {
        position: absolute;
        top: 0;
        right: 0;
        padding: 0.5rem;
        margin: 0.5rem;
        opacity: 0.85;
        transition: all 0.25s;
    }

    &.disabled {
        pointer-events: none;
        cursor: default;
    }
`
