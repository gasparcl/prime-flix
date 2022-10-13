import { Typography } from "@material-ui/core";
import { ScaleLoader } from "react-spinners";
import { LoaderDiv } from "./styles";

export default function Loader() {
    return (
        <>
            <LoaderDiv>
                <ScaleLoader color="#d40e0e" height={100} width={8} />
                <Typography color="error" variant="h5">
                    Wait...Data still loading...
                </Typography>
            </LoaderDiv>
        </>
    );
}