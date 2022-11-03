import { InputAdornment } from "@material-ui/core"
import { SearchOutlined } from "@material-ui/icons"

import { SearchResultsGrid, StyledSearchBar } from "./styles"

export default function SearchBar({
    search,
    handleChange,
    handleClose,
    handleSearchDelayClose,
    loadingSearch,
}) {
    // ╦ ╦╔═╗╔╗╔╔╦╗╦  ╔═╗╦═╗╔═╗
    // ╠═╣╠═╣║║║ ║║║  ║╣ ╠╦╝╚═╗
    // ╩ ╩╩ ╩╝╚╝═╩╝╩═╝╚═╝╩╚═╚═╝
    const handleSubmit = (e) => {
        e.preventDefault()
    }

    // ╔╦╗╔═╗╔╦╗╦ ╦╔═╗╔╦╗╔═╗
    // ║║║║╣  ║ ╠═╣║ ║ ║║╚═╗
    // ╩ ╩╚═╝ ╩ ╩ ╩╚═╝═╩╝╚═╝
    const hasSearch = search.trim().length > 0

    return (
        <>
            <form noValidate onSubmit={handleSubmit}>
                <StyledSearchBar
                    id="outlined-search"
                    fullWidth
                    label="Search here..."
                    type="search"
                    variant="outlined"
                    value={search}
                    onChange={handleChange}
                    onClick={handleClose}
                    margin="dense"
                    InputProps={{
                        endAdornment: (
                            <InputAdornment position="end">
                                <SearchOutlined />
                            </InputAdornment>
                        ),
                    }}
                />
            </form>
            {hasSearch && (
                <SearchResultsGrid
                    search={search}
                    onClose={handleSearchDelayClose}
                    onCancel={handleClose}
                    loadingSearch={loadingSearch}
                />
            )}
        </>
    )
}
