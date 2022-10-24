import styled from "styled-components"
import { Grid } from "@material-ui/core"

export const FavoritesGrid = styled(Grid)`
    padding: 2rem 0.5rem;
`
export const FavoriteGridItem = styled(Grid)`
    transition: all 0.3s;

    &:hover {
        transform: scale(1.05);
    }
`
