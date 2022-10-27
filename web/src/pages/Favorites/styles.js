import styled from "styled-components"

import FilmsGrid from "../../components/FilmsGrid"

export const FavoritesGrid = styled(FilmsGrid)`
    &.MuiGrid-item {
        transition: all 0.3s;
    }
    &.MuiGrid-item:hover {
        transform: scale(1.05);
    }
`
