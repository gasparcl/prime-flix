import PropTypes from "prop-types"
import { Link } from "react-router-dom"
import LearnMoreButton from "../Buttons/LearnMore"

import { TitleDiv, TitleText } from "./styles"

export default function PageTitle({
    description,
    upperCase,
    fontSize,
    isLink,
    ...props
}) {
    return (
        <>
            <TitleDiv className={props.className}>
                <TitleText
                    {...props}
                    variant="h4"
                    component="h4"
                    style={{ color: props.color, fontSize: fontSize }}
                >
                    <b>{upperCase ? description.toUpperCase() : description}</b>
                </TitleText>
                {isLink && (
                    <span className="Link">
                        <LearnMoreButton>See all</LearnMoreButton>
                    </span>
                )}
            </TitleDiv>
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
