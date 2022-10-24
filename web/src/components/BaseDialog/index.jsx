import React from "react"
import PropTypes from "prop-types"
import clsx from "clsx"
import DialogContent from "@material-ui/core/DialogContent"
import DialogContentText from "@material-ui/core/DialogContentText"
import DialogActions from "@material-ui/core/DialogActions"
import Typography from "@material-ui/core/Typography"
import Button from "../Buttons/Button"
import {
    StyledDialog,
    StyledDialogTitle,
    StyledDialogSubtitle,
    Container,
} from "./styles"

// ╔╦╗╔═╗╔╦╗╔═╗╔╦╗╔═╗╔╦╗╔═╗
// ║║║║╣  ║ ╠═╣ ║║╠═╣ ║ ╠═╣
// ╩ ╩╚═╝ ╩ ╩ ╩═╩╝╩ ╩ ╩ ╩ ╩

export const BASE_DIALOG_Z_INDEX = 10001

/**
 * App Dialog component.
 *
 * Used to confirm user actions.
 *
 * @param {{
 *   open: boolean,
 *   title: string,
 *   subtitle: string,
 *   content: string | React.ReactNode,
 *   disagreeLabel: string | React.ReactNode | object,
 *   agreeLabel: string | React.ReactNode | object,
 *   disagreeColor: string,
 *   agreeColor: string,
 *   onConfirm: () => void,
 *   onCancel: () => void,
 * }} props - Mui Dialog props.
 *
 */
export default function BaseDialog({
    title,
    subtitle,
    content,
    disagreeLabel,
    agreeLabel,
    disagreeColor,
    agreeColor,
    onConfirm,
    onCancel,
    loading,
    lazyConfirmation, // eslint-disable-line no-unused-vars
    zIndex,
    className,
    ...props
}) {
    const isMessage = typeof content === "string"

    return (
        <StyledDialog
            onClose={onCancel}
            aria-labelledby="base-dialog-title"
            aria-describedby="base-dialog-description"
            maxWidth="xs"
            fullWidth
            keepMounted
            style={{ zIndex }}
            className={clsx(className, {
                "Content-message": isMessage,
            })}
            {...props}
        >
            <StyledDialogTitle id="base-dialog-title">
                {title}
            </StyledDialogTitle>
            {subtitle && (
                <StyledDialogSubtitle>
                    <Typography component="div" variant="body2">
                        {subtitle}
                    </Typography>
                </StyledDialogSubtitle>
            )}
            <DialogContent>
                {isMessage ? (
                    <DialogContentText id="base-dialog-description">
                        {content}
                    </DialogContentText>
                ) : (
                    <Container>{content || props.children}</Container>
                )}
            </DialogContent>
            <DialogActions>
                {onCancel && (
                    <Button
                        onClick={onCancel}
                        variant="text"
                        color={disagreeColor}
                        disabled={loading}
                        style={{ color: disagreeColor }}
                    >
                        {disagreeLabel}
                    </Button>
                )}
                {onConfirm && (
                    <Button
                        // autoFocus
                        onClick={onConfirm}
                        variant="contained"
                        color={agreeColor}
                        isLoading={loading}
                        style={{ background: agreeColor, color: "#fff" }}
                    >
                        {agreeLabel}
                    </Button>
                )}
            </DialogActions>
        </StyledDialog>
    )
}

BaseDialog.propTypes = {
    open: PropTypes.bool,
    loading: PropTypes.bool,
    lazyConfirmation: PropTypes.bool,
    title: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.object,
        PropTypes.node,
    ]),
    subtitle: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
    content: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.element,
        PropTypes.object,
    ]),
    disagreeLabel: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.node,
        PropTypes.object,
    ]),
    agreeLabel: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.node,
        PropTypes.object,
    ]),
    disagreeColor: PropTypes.string,
    agreeColor: PropTypes.string,
    onConfirm: PropTypes.func,
    onCancel: PropTypes.func,
    zIndex: PropTypes.number,
}

BaseDialog.defaultProps = {
    open: false,
    loading: false,
    disagreeLabel: "Cancel",
    agreeLabel: "Confirm",
    disagreeColor: "#222",
    agreeColor: "#222",
    zIndex: BASE_DIALOG_Z_INDEX,
}
