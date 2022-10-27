import { InputAdornment } from "@material-ui/core"
import { SearchOutlined } from "@material-ui/icons"

import { StyledSearchBar, ResultsDialog, ResultsDialogLoader } from "./styles"
import SearchResults from "../SearchResults"
import Pagination from "../Pagination"

export default function SearchBar({
    search,
    results,
    isLoading,
    handleChange,
    handleClose,
    handleSearchDelayClose,
    paginationData,
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
    const hasResults = results.length > 0
    const dialogTitle = `Results for the search: "${search}"`

    let totalPages = paginationData.totalPages
    let currentPage = paginationData.currentPage

    return (
        <>
            <form noValidate onSubmit={handleSubmit}>
                <StyledSearchBar
                    id="outlined-search"
                    fullWidth
                    label="Find your movies here..."
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
            {hasResults && (
                <ResultsDialog
                    title={!isLoading ? dialogTitle : null}
                    loading={isLoading}
                    fullWidth
                    fullScreen
                    open={hasResults}
                    onCancel={handleClose}
                    maxWidth="lg"
                    disagreeColor="#fff"
                    disagreeLabel="close"
                    disagreeVariant="outlined"
                >
                    {isLoading ? (
                        <ResultsDialogLoader className="ResultsLoader" />
                    ) : (
                        <>
                            <SearchResults
                                url={results}
                                onClose={handleSearchDelayClose}
                            />
                        </>
                    )}
                </ResultsDialog>
            )}
        </>
    )
}
