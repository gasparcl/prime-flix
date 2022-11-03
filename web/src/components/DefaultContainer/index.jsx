import PropTypes from "prop-types"
import { useMediaQuery, useTheme } from "@material-ui/core"

import { StyledContainer } from "./styles"

export default function DefaultContainer({ children, smPadding }) {
    // ╦ ╦╔═╗╔═╗╦╔═╔═╗
    // ╠═╣║ ║║ ║╠╩╗╚═╗
    // ╩ ╩╚═╝╚═╝╩ ╩╚═╝
    const theme = useTheme()
    const IS_MOBILE = useMediaQuery(theme.breakpoints.down("xs"))

    return (
        <StyledContainer
            className={
                !smPadding && IS_MOBILE
                    ? "mobile"
                    : smPadding
                    ? "smPadding"
                    : ""
            }
        >
            {children}
        </StyledContainer>
    )
}

DefaultContainer.propTypes = {
    children: PropTypes.node.isRequired,
    smPadding: PropTypes.bool,
}

DefaultContainer.defaultProps = {
    smPadding: false,
}
