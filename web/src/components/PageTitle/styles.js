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
        flex-direction: column;
        align-items: flex-start;
    }

    .absButton {
        position: absolute;
        right: 0;
        top: 1.75rem;
    }

    .mobileButton {
        position: initial;
    }
`

export const TitleText = styled(Typography)``
