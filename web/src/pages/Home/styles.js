import styled from "styled-components"
import { Grid } from "@material-ui/core"

export const MoviesGrid = styled(Grid)`
    padding: 2rem 0.5rem;
`
export const MoviesGridItem = styled(Grid)`
    transition: all 0.3s;

    &:hover {
        transform: scale(1.05);
    }
`
