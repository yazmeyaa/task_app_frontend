import { ReactNode, ButtonHTMLAttributes } from "react"

interface DangerButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    children: ReactNode
}

export const DangerButton = ({ children, ...rest }: DangerButtonProps) => {
    return (
        <button className="btn btn_danger horizontal_align_center" {...rest}>
            {children}
        </button>
    )
}