import { Layout } from "components/layout"
import { AppProviders } from "components/providers"
import { Router } from "routes"
import { useEffect } from "react"
import { ApiClient } from "tools/ApiClient"

export const App = () => {

    ApiClient.checkAuth()
    .then(console.log)
    .catch(console.error)

    return (
        <AppProviders>
            <Layout>
                <Router />
            </Layout>
        </AppProviders>
    )
}