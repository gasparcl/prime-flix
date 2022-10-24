import styled from "styled-components"
import { Dialog, DialogTitle } from "@material-ui/core"

export const StyledDialog = styled(Dialog)`
    &.Content-message {
        .MuiDialogContent-root {
            border-bottom: 1px solid #eee;
        }
    }

    .MuiDialogContentText-root {
        margin: 12px 0;
    }

    .MuiDialogContentText-root {
        color: #111;
    }

    @media (max-width: 600px) {
        .MuiDialogContent-root {
            margin-bottom: 1rem;
            padding: 0 1.5rem;
        }
    }
`

export const StyledDialogTitle = styled(DialogTitle)`
    background: #222;
    color: #fff;

    .MuiTypography-h6 {
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
    }

    @media (max-width: 600px) {
        .MuiTypography-h6 {
            font-size: 1.15rem;
            font-weight: 500;
            line-height: 1.3;
            letter-spacing: 0.027rem;
        }
    }
`

export const StyledDialogSubtitle = styled.div`
    padding: 0.5rem 1.5rem;
    background: ${(props) => props.theme.palette.primary.dark};
    color: ${(props) => props.theme.palette.primary.contrastText};
`

export const Container = styled.div`
    margin-top: 1rem;
    margin-bottom: 1rem;
`
