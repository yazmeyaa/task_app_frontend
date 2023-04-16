import { Footer } from "components/footer"
import { Header } from "components/header/header"
import { SideBar } from "components/sidebar"
import { FunctionComponent, ReactNode } from "react"

interface LayoutProps {
    children: ReactNode
}

export const Layout: FunctionComponent<LayoutProps> = ({ children }) => {
    return (
        <main className="app_layout">
            <Header />
            <div className="app_layout__content">
                <SideBar className="app_menu_sidebar">
                    some
                </SideBar>
                {children}
            </div>
            <Footer />
        </main>
    )
}