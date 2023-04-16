import { FC, MouseEvent, ReactNode, KeyboardEvent, useLayoutEffect } from "react"
import { createPortal } from "react-dom"

interface ModalProps {
    children: ReactNode
    open: boolean
    onClose: () => void
}

export const Modal: FC<ModalProps> = ({ children, open, onClose }) => {
    function handleClickOutside(event: MouseEvent<HTMLDivElement>) {
        event.preventDefault()
        event.stopPropagation()
        onClose()
    }

    function modalKeyboardControl(event: KeyboardEvent<HTMLDivElement>) {
        if (event.code === 'Escape') {
            event.preventDefault()
            onClose()
        }
    }

    if (!open) return null

    return createPortal(
        <div className="overlay" onMouseDown={handleClickOutside} onKeyDown={modalKeyboardControl}>
            <dialog className="modal_window" open onMouseDown={(event) => { event.stopPropagation() }}>
                {children}
            </dialog>
        </div>,
        document.getElementById('modal_portal') as HTMLDivElement)
}