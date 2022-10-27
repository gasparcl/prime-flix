import PropTypes from "prop-types"

import { Typography } from "@material-ui/core"
import { ScaleLoader } from "react-spinners"
import { LoaderDiv } from "./styles"

export default function Loader({ loaderText, ...props }) {
    return (
        <>
            <LoaderDiv className={props.className}>
                <ScaleLoader color="#d40e0e" height={100} width={8} />
                <Typography color="error" variant="h5">
                    {loaderText}
                </Typography>
            </LoaderDiv>
        </>
    )
}

Loader.propTypes = {
    loaderText: PropTypes.string,
}

Loader.defaultProps = {
    loaderText: "Wait...Data still loading...",
}
