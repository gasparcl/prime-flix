import { useMemo } from "react"

import { ResultsGrid, ResultGridItem, ResultItemCard } from "./styles"

export default function SearchResults({ resultsData }) {
    const renderResults = useMemo(() => {
        return (
            <>
                <ResultsGrid container spacing={2}>
                    {resultsData.map((result) => {
                        return (
                            <ResultGridItem item xs={3} key={result.id}>
                                <ResultItemCard itemData={result} />
                            </ResultGridItem>
                        )
                    })}
                </ResultsGrid>
            </>
        )
    }, [resultsData])

    return renderResults
}
