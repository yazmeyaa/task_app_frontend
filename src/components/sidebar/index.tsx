import { FunctionComponent, ReactNode } from "react"



interface SideBarProps {
    children: ReactNode
    className?: string
}

export const SideBar: FunctionComponent<SideBarProps> = ({ children, className }) => {

    return (
        <aside className={`sidebar ${className ? className : ''}`}>
            {children}
        </aside>
    )
}