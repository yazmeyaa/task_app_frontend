import { ReactNode, ButtonHTMLAttributes } from "react"

interface PrimaryButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    children: ReactNode
}

export const PrimaryButton = ({ children, ...rest }: PrimaryButtonProps) => {
    return (
        <button className="btn btn_primary horizontal_align_center" {...rest}>
            {children}
        </button>
    )
}