import React from "react"
import { ButtonIcon, DetailsButton } from "../styles"

export default function LearnMoreButton({ children, isBackButton, ...props }) {
    return (
        <DetailsButton
            {...props}
            className={`btn btn-outline-danger btn-sm ${props.className}`}
            onClick={props.onClick}
        >
            <span
                className={`d-flex justify-content-center ${
                    isBackButton ? "align-items-start" : "align-items-center"
                }`}
            >
                {isBackButton ? (
                    <>
                        <ButtonIcon
                            fontSize="small"
                            className={isBackButton ? "backbutton" : ""}
                        />
                        <b>{children}</b>
                    </>
                ) : (
                    <>
                        <b>{children}</b>
                        <ButtonIcon fontSize="small" />
                    </>
                )}
            </span>
        </DetailsButton>
    )
}
