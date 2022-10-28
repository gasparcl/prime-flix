import { InputAdornment } from "@material-ui/core"
import { SearchOutlined } from "@material-ui/icons"

import { StyledSearchBar, ResultsDialog } from "./styles"
import SearchResults from "../SearchResults"

export default function SearchBar({
    search,
    handleChange,
    handleClose,
    handleSearchDelayClose,
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
    const dialogTitle = `Results for the search: "${search}"`

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
            {hasSearch && (
                <ResultsDialog
                    title={dialogTitle}
                    fullWidth
                    fullScreen
                    open={hasSearch}
                    onCancel={handleClose}
                    maxWidth="lg"
                    disagreeColor="#fff"
                    disagreeLabel="close"
                    disagreeVariant="outlined"
                >
                    {/* {isLoading ? (
                        <ResultsDialogLoader className="ResultsLoader" />
                    ) : (
                        <> */}
                    <SearchResults
                        search={search}
                        onClose={handleSearchDelayClose}
                    />
                    {/* </> */}
                </ResultsDialog>
            )}
        </>
    )
}
