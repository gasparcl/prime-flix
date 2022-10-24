import styled from "styled-components"
import MuiButton from "@material-ui/core/Button"

export const StyledButton = styled(MuiButton)`
    position: relative;

    .MuiCircularProgress-root {
        position: absolute;
    }
    &.Flex-grow {
        flex-grow: 1;
    }
`
