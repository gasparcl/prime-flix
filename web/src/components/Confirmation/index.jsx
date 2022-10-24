import React, { useState, useEffect } from "react"
import { Fade } from "@material-ui/core"
import BaseDialog, { BASE_DIALOG_Z_INDEX } from "../BaseDialog"
import events from "../../consts/events"
import client from "../../services/eventEmitter"

// ╔╦╗╔═╗╔╦╗╔═╗╔╦╗╔═╗╔╦╗╔═╗
// ║║║║╣  ║ ╠═╣ ║║╠═╣ ║ ╠═╣
// ╩ ╩╚═╝ ╩ ╩ ╩═╩╝╩ ╩ ╩ ╩ ╩

const initialState = {
    title: "",
    content: "",
    loading: false,
}

// ╔╦╗╔═╗╔╦╗╦ ╦╔═╗╔╦╗╔═╗
// ║║║║╣  ║ ╠═╣║ ║ ║║╚═╗
// ╩ ╩╚═╝ ╩ ╩ ╩╚═╝═╩╝╚═╝

export const confirmation = {
    /**
     * @typedef { (typeof initialState) } DialogProps
     * @typedef { (string | JSX.Element) } Content
     *
     * @param {Content} title
     * @param {Content} content
     * @param {DialogProps} options
     * @returns {Promise<void>}
     */
    async open(title, content, { ...options } = {}) {
        client.emit(events.confirmation.open, { title, content, ...options })

        return new Promise((resolve) => {
            client.once(events.confirmation.confirm, () => resolve(true))
            client.once(events.confirmation.cancel, () => resolve(false))
        })
    },
    close() {
        client.emit(events.confirmation.close)
    },
}

export const Transition = React.forwardRef((props, ref) => {
    return <Fade direction="up" ref={ref} {...props} />
})

export default function Confirmation() {
    const [open, setOpen] = useState(false)
    const [dialog, setDialog] = useState({ ...initialState })

    const handleOpen = (options) => {
        setOpen(true)
        setDialog({
            ...options,
        })
    }

    const handleClose = () => {
        setOpen(false)
        // setDialog({ ...initialState })
    }

    const handleConfirm = () => {
        client.emit(events.confirmation.confirm)

        if (dialog.lazyConfirmation)
            setDialog((dialog) => ({ ...dialog, loading: true }))
        else setOpen(false)
    }

    const handleCancel = () => {
        client.emit(events.confirmation.cancel)
        setOpen(false)
    }

    useEffect(() => {
        client.on(events.confirmation.open, handleOpen)
        client.on(events.confirmation.close, handleClose)

        return () => {
            client.removeEventListener(events.confirmation.open, handleOpen)
            client.removeEventListener(events.confirmation.close, handleClose)
        }
    }, [])

    return (
        <BaseDialog
            TransitionComponent={Transition}
            open={open}
            onConfirm={handleConfirm}
            onCancel={handleCancel}
            maxWidth="xs"
            zIndex={BASE_DIALOG_Z_INDEX + 1}
            {...dialog}
        />
    )
}
