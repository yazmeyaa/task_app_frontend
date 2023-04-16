import { ReactNode } from "react"
import { Provider } from "react-redux"
import { BrowserRouter } from "react-router-dom"
import { store } from "redux/store"

interface AppProviderProps {
    children: ReactNode
}

export function AppProviders({ children }: AppProviderProps) {
    return (
        <Provider store={store}>
            <BrowserRouter>
                {children}
            </BrowserRouter>
        </Provider>
    )
}