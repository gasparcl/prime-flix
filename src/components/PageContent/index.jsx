import { Paper } from "@material-ui/core";
import React from "react";
import { ContentContainer } from "./styles";

export default function PageContent({ children, ...props }) {
    return (
        <>
            <Paper>
                <ContentContainer>{children}</ContentContainer>
            </Paper>
        </>
    );
}
