import styled from "styled-components"

import BaseDialog from "../BaseDialog"

export const ResultsDialog = styled(BaseDialog)`
    .MuiDialog-root {
        z-index: 998;
    }

    .MuiBackdrop-root {
        background: transparent;
    }

    .MuiDialog-scrollPaper {
        align-items: end;
    }

    .MuiDialog-paperFullScreen {
        height: calc(100vh - 100px);
        width: 70vw;
    }

    .MuiDialogTitle-root {
        background: #181818;
        padding: 24px 32px 8px;
    }

    .MuiDialogContent-root {
        background: #181818;
        padding: 4px 24px 8px;
    }

    .MuiDialogActions-root {
        background: #181818;
    }

    .MuiButton-outlined {
        border: 1px solid #fff;
    }
`
