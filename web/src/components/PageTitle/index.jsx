import PropTypes from "prop-types"

import LearnMoreButton from "../Buttons/LearnMore"
import { TitleDiv, TitleText } from "./styles"

export default function PageTitle({
    description,
    upperCase,
    isLink,
    onClickAll,
    ...props
}) {
    return (
        <>
            <TitleDiv className={props.className}>
                <TitleText
                    {...props}
                    variant="h4"
                    component="h4"
                    style={{ color: props.color, fontSize: props.fontSize }}
                >
                    <b>{upperCase ? description.toUpperCase() : description}</b>
                </TitleText>
                {isLink && (
                    <div className="Link">
                        <LearnMoreButton onClick={onClickAll}>
                            See all
                        </LearnMoreButton>
                    </div>
                )}
            </TitleDiv>
        </>
    )
}

PageTitle.propTypes = {
    description: PropTypes.string,
    upperCase: PropTypes.bool,
    color: PropTypes.string,
    fontSize: PropTypes.string,
    isLink: PropTypes.bool,
    onClickAll: PropTypes.func,
}

PageTitle.defaultProps = {
    description: "",
    upperCase: false,
    color: "#ffffff",
    isLink: false,
}
