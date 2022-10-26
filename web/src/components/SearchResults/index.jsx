import { useMemo } from "react"

import { ResultsGrid, ResultGridItem, ResultItemCard } from "./styles"

export default function SearchResults({ resultsData, onClose }) {
    const renderResults = useMemo(() => {
        return (
            <>
                <ResultsGrid container spacing={2}>
                    {resultsData.map((result) => {
                        return (
                            <ResultGridItem item xs={3} key={result.id}>
                                <ResultItemCard
                                    itemData={result}
                                    onClose={onClose}
                                />
                            </ResultGridItem>
                        )
                    })}
                </ResultsGrid>
            </>
        )
    }, [resultsData])

    return renderResults
}
