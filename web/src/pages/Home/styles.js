import styled from "styled-components"

import LearnMoreButton from "../../components/Buttons/LearnMore"
import FilmsGrid from "../../components/FilmsGrid"

export const HomeDiv = styled.div`
    position: relative;
`

export const HomeGrid = styled(FilmsGrid)`
    .MuiCardMedia-root {
        border-radius: 0.5rem;
    }

    .description {
        margin-bottom: 1rem;
    }

    .sc-dkzDqf {
        margin-bottom: 1rem;
    }
`

export const BackButton = styled(LearnMoreButton)`
    z-index: 10;
    right: 0;
    top: 3.5rem;
    width: 80.62px;

    &.absButton {
        position: absolute;
    }

    &.mobileButton {
        position: initial;
    }
`
