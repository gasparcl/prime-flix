import { PaginationContainer, StyledPagination } from "./styles"

export default function Pagination({ totalPages, handleChange, ...props }) {
    return (
        <>
            <PaginationContainer>
                <StyledPagination
                    count={totalPages}
                    color={"secondary"}
                    variant="outlined"
                    onChange={handleChange}
                    {...props}
                />
            </PaginationContainer>
        </>
    )
}
