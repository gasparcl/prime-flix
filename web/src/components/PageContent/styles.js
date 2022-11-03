import { Box, Paper } from "@material-ui/core"
import styled from "styled-components"

export const BackPaper = styled(Paper)``

export const ContentContainer = styled(Box)`
    padding: 3rem 2.5rem;
    background: #181818;
    width: 70vw;
    min-height: calc(100vh - 92px);

    &.mobileContainer {
        padding: 2.5rem 3rem;
        width: 100vw;
    }
`
