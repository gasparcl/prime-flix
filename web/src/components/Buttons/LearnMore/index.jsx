import React from "react"
import { ButtonIcon, DetailsButton } from "../styles"

export default function LearnMoreButton({ children, ...props }) {
    return (
        <DetailsButton
            className="btn btn-outline-danger btn-sm"
            onClick={props.onClick}
        >
            <span className="d-flex align-items-center justify-content-center">
                <b>{children}</b>
                <ButtonIcon fontSize="small" />
            </span>
        </DetailsButton>
    )
}
