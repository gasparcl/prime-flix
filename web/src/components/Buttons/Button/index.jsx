import React from "react"
import PropTypes from "prop-types"
import { StyledButton } from "./styles"
// eslint-disable-next-line
import { ButtonProps } from "@material-ui/core/Button"
import CircularProgress from "@material-ui/core/CircularProgress"

/**
 * Custom component Button
 *
 * @param {(ButtonProps & {isLoading: boolean})} props
 * @returns
 */
export default function Button({ isLoading, children, ...props }) {
    const disabled = isLoading || props.disabled

    return (
        <StyledButton {...props} disabled={disabled}>
            {children}
            {isLoading && <CircularProgress size={25} />}
        </StyledButton>
    )
}

Button.propTypes = {
    isLoading: PropTypes.bool,
}

Button.defaultProps = {
    isLoading: false,
}
