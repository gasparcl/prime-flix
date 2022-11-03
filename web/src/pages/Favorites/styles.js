import styled from "styled-components"

import FavoritesGrid from "../../components/FavoritesGrid"

export const FavoriteGrid = styled(FavoritesGrid)`
    &.MuiGrid-item {
        transition: all 0.3s;
    }
    &.MuiGrid-item:hover {
        transform: scale(1.05);
    }
`
