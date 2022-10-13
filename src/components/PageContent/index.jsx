import React from "react"
import { BackPaper, ContentContainer } from "./styles"

export default function PageContent({ children, ...props }) {
    return (
        <>
            <BackPaper elevation={5}>
                <ContentContainer {...props}>{children}</ContentContainer>
            </BackPaper>
        </>
    )
}
