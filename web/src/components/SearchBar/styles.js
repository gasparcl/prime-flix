import styled from "styled-components"
import TextField from "@material-ui/core/TextField"
import SearchResults from "../SearchResults"

export const StyledSearchBar = styled(TextField)`
    .MuiFormControl-root {
        min-width: 300px;
    }

    .MuiFormLabel-root {
        color: rgba(0, 0, 0, 0.54);
        transition: all 0.25s;
    }
    &:hover .MuiFormLabel-root {
        color: #fff;
    }
    .MuiInputLabel-outlined.MuiInputLabel-shrink {
        transform: translate(14px, -1px) scale(0.75);
    }

    .MuiFormLabel-root.Mui-focused {
        color: #fff;
    }

    .MuiOutlinedInput-notchedOutline {
        border-color: rgba(0, 0, 0, 0.4);
        transition: all 0.25s;
    }

    .PrivateNotchedOutline-root-3 {
        top: -5px;
        left: 0;
        right: 0;
        bottom: 0;
        margin: 0;
        padding: 0 8px;
        overflow: hidden;
        position: absolute;
        border-style: solid;
        border-width: 2px;
        border-radius: inherit;
        pointer-events: none;
    }

    .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline {
        border-color: #fff;
        border-width: 3px;
    }

    .MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline {
        border-color: #fff;
    }

    .MuiInputBase-input {
        transition: all 0.25s;
        margin: 0.25rem 0 0;
    }

    &:hover .MuiInputBase-input {
        color: #fff;
    }

    .MuiInputBase-input:focus {
        color: #fff;
    }

    .MuiSvgIcon-root {
        transition: fill 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
    }

    .MuiOutlinedInput-root.Mui-focused .MuiSvgIcon-root {
        fill: #fff;
    }

    &:hover .MuiSvgIcon-root {
        fill: #fff;
    }
`

export const SearchResultsGrid = styled(SearchResults)`
    .MuiCardMedia-root {
        border-radius: 0.5rem;
    }

    .description {
        margin-bottom: 1rem !important;
    }

    .kRkwDv {
        margin: 0 0 0.5rem;
    }

    button {
        margin-bottom: 1rem;
    }
`
