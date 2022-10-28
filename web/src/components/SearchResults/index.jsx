import { useMemo } from "react"

import { apiEndPoints } from "../../consts/apiEndPoints"

import { ResultList } from "./styles"

export default function SearchResults({ search, onClose }) {
    // apiEndPoint location fetch
    const url = apiEndPoints.search.movie

    const renderResults = useMemo(() => {
        return (
            <>
                <ResultList url={url} search={search} onClose={onClose} />
            </>
        )
    }, [search, onClose, url])

    return renderResults
}
