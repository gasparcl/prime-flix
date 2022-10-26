import { InputAdornment } from "@material-ui/core"
import { SearchOutlined } from "@material-ui/icons"

import Loader from "../Loader"

import { StyledSearchBar, ResultsDialog } from "./styles"
import SearchResults from "../SearchResults"
import SearchPagination from "../Pagination"

export default function SearchBar({
    search,
    results,
    isLoading,
    handleChange,
    handleClose,
    handleSearchDelayClose,
    paginationData,
    onChangePage,
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
                        <Loader />
                    ) : (
                        <SearchResults
                            resultsData={results}
                            onClose={handleSearchDelayClose}
                        />
                    )}
                    <SearchPagination
                        totalPages={totalPages}
                        handleChange={onChangePage}
                    />
                </ResultsDialog>
            )}
        </>
    )
}
