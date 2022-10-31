import { Typography } from "@material-ui/core"
import styled from "styled-components"

export const TitleDiv = styled.div`
    display: flex;
    align-items: center;
    position: relative;

    &.centerTitle {
        justify-content: center;
    }

    &.mobileTitle {
        justify-content: flex-start;
    }

    .Link {
        position: absolute;
        right: 0;
        top: 1.5rem;
    }
`

export const TitleText = styled(Typography)``
