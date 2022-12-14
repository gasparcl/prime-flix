import PropTypes from "prop-types"
import { useMediaQuery, useTheme } from "@material-ui/core"

import LearnMoreButton from "../Buttons/LearnMore"
import { TitleDiv, TitleText } from "./styles"

export default function PageTitle({
    description,
    upperCase,
    isLink,
    onClickAll,
    hasParagraph,
    centered,
    ...props
}) {
    // ╦ ╦╔═╗╔═╗╦╔═╔═╗
    // ╠═╣║ ║║ ║╠╩╗╚═╗
    // ╩ ╩╚═╝╚═╝╩ ╩╚═╝
    const theme = useTheme()
    const IS_TABLET_XL = useMediaQuery(theme.breakpoints.between("sm", "md"))
    const IS_MOBILE = useMediaQuery(theme.breakpoints.down("xs"))

    return (
        <>
            <TitleDiv
                className={`${
                    !centered && (IS_MOBILE || IS_TABLET_XL)
                        ? "mobileTitle"
                        : "centerTitle"
                }`}
            >
                {isLink && (
                    <div className={IS_MOBILE ? "mobileButton" : "absButton"}>
                        <LearnMoreButton onClick={onClickAll}>
                            See all
                        </LearnMoreButton>
                    </div>
                )}
                <TitleText
                    {...props}
                    variant={IS_MOBILE || IS_TABLET_XL ? "h5" : "h4"}
                    component={IS_MOBILE || IS_TABLET_XL ? "h5" : "h4"}
                    style={{ color: props.color, fontSize: props.fontSize }}
                    paragraph={hasParagraph ? true : false}
                >
                    <b>{upperCase ? description.toUpperCase() : description}</b>
                </TitleText>
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
    hasParagraph: PropTypes.bool,
    centered: PropTypes.bool,
}

PageTitle.defaultProps = {
    description: "",
    upperCase: false,
    color: "#ffffff",
    isLink: false,
    hasParagraph: false,
    centered: false,
}
