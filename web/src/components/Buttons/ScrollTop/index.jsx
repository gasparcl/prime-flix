import PropTypes from "prop-types"
import { useMediaQuery, useTheme } from "@material-ui/core"
import { ArrowUpwardOutlined } from "@material-ui/icons"

import { scrollTop, scrollTopModal } from "../../../services/utils"

import { ScrollTopButton } from "../styles"

export default function ScrollTop({ iconSize, onModal, ...props }) {
    // ╦ ╦╔═╗╔═╗╦╔═╔═╗
    // ╠═╣║ ║║ ║╠╩╗╚═╗
    // ╩ ╩╚═╝╚═╝╩ ╩╚═╝
    const theme = useTheme()
    const IS_MOBILE = useMediaQuery(theme.breakpoints.down("xs"))
    
    return (
        <>
            <ScrollTopButton
                className={
                    `btn btn-outline-danger 
                    ${IS_MOBILE ? "mobile" : ""} 
                    ${props.className}`
                }
                onClick={onModal ? scrollTopModal : scrollTop}
            >
                <span className="d-flex justify-content-center align-items-center">
                    <ArrowUpwardOutlined fontSize={iconSize} />
                </span>
            </ScrollTopButton>
        </>
    )
}

ScrollTop.propTypes = {
    onModal: PropTypes.bool,
    iconSize: PropTypes.oneOf([
        "default",
        "inherit",
        "large",
        "medium",
        "small",
    ]),
}

ScrollTop.defaultProps = {
    onModal: false,
    iconSize: "medium",
}
