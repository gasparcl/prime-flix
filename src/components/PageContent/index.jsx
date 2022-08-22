import React from "react";
import { BackPaper, ContentContainer } from "./styles";

export default function PageContent({ children, ...props }) {
    return (
        <>
            <BackPaper>
                <ContentContainer>{children}</ContentContainer>
            </BackPaper>
        </>
    );
}
