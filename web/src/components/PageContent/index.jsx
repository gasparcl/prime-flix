import React from "react"

import { useMediaQuery, useTheme } from "@material-ui/core"

import { BackPaper, ContentContainer } from "./styles"
import ScrollTop from "../Buttons/ScrollTop"

export default function PageContent({ children, ...props }) {
    // ╦ ╦╔═╗╔═╗╦╔═╔═╗
    // ╠═╣║ ║║ ║╠╩╗╚═╗
    // ╩ ╩╚═╝╚═╝╩ ╩╚═╝
    const theme = useTheme()
    const IS_MOBILE = useMediaQuery(theme.breakpoints.down("xs"))
    return (
        <>
            <BackPaper elevation={5}>
                <ContentContainer
                    {...props}
                    className={IS_MOBILE ? "mobileContainer" : ""}
                >
                    {children}
                    <ScrollTop />
                </ContentContainer>
            </BackPaper>
        </>
    )
}
