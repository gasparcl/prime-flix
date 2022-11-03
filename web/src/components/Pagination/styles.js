import styled from "styled-components"
import Pagination from "@material-ui/lab/Pagination"

export const PaginationContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0 0.5rem;
    padding: 1rem 0;
    border-radius: 0.5rem;

    &.mobilePagination {
        width: 72.5vw;
    }
`

export const StyledPagination = styled(Pagination)`
    .MuiPaginationItem-outlined {
        border: 2px solid rgba(255, 255, 255, 0.87);
    }

    .MuiPaginationItem-root {
        color: rgba(255, 255, 255, 0.87);
    }

    .MuiPaginationItem-page:hover {
        background-color: rgba(255, 255, 255, 0.2);
    }

    .MuiPaginationItem-outlinedSecondary.Mui-selected {
        color: rgba(196, 22, 28);
        border: 1px solid rgba(196, 22, 28, 0.5);
        background-color: rgba(196, 22, 28, 0.12);
    }

    .MuiPaginationItem-outlinedSecondary.Mui-selected:hover,
    .MuiPaginationItem-outlinedSecondary.Mui-selected.Mui-focusVisible {
        background-color: rgba(196, 22, 28, 0.24);
    }
`
