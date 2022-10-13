import PropTypes from "prop-types"
import { Box, Typography } from "@material-ui/core"

export default function TextBox({ children, ...props }) {
    return (
        <Box {...props} component="div" className={`mb-3 ${props.className}`}>
            <Typography {...props} style={{ color: props.color }}>
                <span>{children}</span>
            </Typography>
        </Box>
    )
}

TextBox.propTypes = {
    color: PropTypes.string,
    className: PropTypes.string,
}

TextBox.defaultProps = {
    color: "#ffffff",
}
