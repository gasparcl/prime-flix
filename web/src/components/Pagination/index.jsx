import { useMediaQuery, useTheme } from "@material-ui/core"

import { PaginationContainer, StyledPagination } from "./styles"

export default function Pagination({ totalPages, handleChange, ...props }) {
    // ╦ ╦╔═╗╔═╗╦╔═╔═╗
    // ╠═╣║ ║║ ║╠╩╗╚═╗
    // ╩ ╩╚═╝╚═╝╩ ╩╚═╝
    const theme = useTheme()
    const IS_MOBILE = useMediaQuery(theme.breakpoints.down("xs"))
    return (
        <>
            <PaginationContainer
                className={IS_MOBILE ? "mobilePagination" : ""}
            >
                <StyledPagination
                    count={totalPages}
                    size={IS_MOBILE ? "small" : "medium"}
                    color={"secondary"}
                    variant="outlined"
                    onChange={handleChange}
                    {...props}
                />
            </PaginationContainer>
        </>
    )
}
