import { useMemo } from "react"

import { ResultList } from "./styles"

export default function SearchResults({ url, onClose }) {
    const renderResults = useMemo(() => {
        return <ResultList url={url} onClose={onClose} />
    }, [url])

    return renderResults
}
