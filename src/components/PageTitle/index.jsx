import PropTypes from "prop-types"
import { Typography } from "@material-ui/core"

export default function PageTitle({
    description,
    upperCase,
    fontSize,
    ...props
}) {
    return (
        <Typography
            {...props}
            variant="h4"
            style={{ color: props.color, fontSize: fontSize }}
        >
            {upperCase ? description.toUpperCase() : description}
        </Typography>
    )
}

PageTitle.propTypes = {
    description: PropTypes.string,
    upperCase: PropTypes.bool,
    color: PropTypes.string,
}

PageTitle.defaultProps = {
    upperCase: false,
    color: "#ffffff",
}
