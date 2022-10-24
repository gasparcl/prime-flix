import PropTypes from "prop-types"

import { TitleText } from "./styles"

export default function PageTitle({
    description,
    upperCase,
    fontSize,
    ...props
}) {
    return (
        <>
            <div
                className={`d-flex flex-column justify-content-center align-items-center ${props.className}`}
            >
                <TitleText
                    {...props}
                    variant="h4"
                    component="h4"
                    style={{ color: props.color, fontSize: fontSize }}
                >
                    <b>{upperCase ? description.toUpperCase() : description}</b>
                </TitleText>
            </div>
        </>
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
