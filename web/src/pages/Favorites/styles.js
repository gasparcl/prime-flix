import styled from "styled-components"
import { Grid } from "@material-ui/core"

export const FavoritesGrid = styled(Grid)`
    padding: 2rem 0.5rem;
`

export const FavoriteGridItem = styled(Grid)`
    &:last-child {
        min-height: 420px;
    }
`
