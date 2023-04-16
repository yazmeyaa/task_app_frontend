import { Layout } from "components/layout"
import { AppProviders } from "components/others/app_providers"
import { Router } from "routes"

import './scss/main.scss'

export const App = () => {
    return (
        <AppProviders>
            <Layout>
                <Router />
            </Layout>
        </AppProviders>
    )
}