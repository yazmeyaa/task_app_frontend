import { CHECK_AUTH_ROUTE, CREATE_TASK_ROUTE, DELETE_TASK_ROUTE, GET_TASK_LIST_ROUTE, GET_TASK_ROUTE, LOGIN_ROUTE, REGISTER_ROUTE, UPDATE_TASK_ROUTE } from 'api/apiRoutes'

interface LoginCredentails {
    username: string
    password: string
}

interface RegsiterData {
    username: string,
    password: string,
    confirmPassword: string,
    email: string,
}

interface ResponseError {
    error: string
}

interface LoginResponseSuccess {
    message: string
}

class ApiClient {
    private baseUrl: string
    private basicHeaders = new Headers({
        "Content-Type": "application/json",
    })

    constructor(baseUrl: string) {
        this.baseUrl = baseUrl
    }

    public async login(credentials: LoginCredentails): Promise<Error | LoginResponseSuccess> {
        const response = await fetch(`${this.baseUrl}${LOGIN_ROUTE}`, {
            method: 'post',
            headers: this.basicHeaders,
            body: JSON.stringify(credentials)
        })

        if (!response.ok && response.status === 400) {
            const data = await response.json() as ResponseError
            throw new Error(data.error)
        }
        else if (!response.ok && response.status === 403) {
            const data = await response.json() as ResponseError
            throw new Error(data.error)
        }
        else if (response.ok && response.status === 200) {
            const data = await response.json() as LoginResponseSuccess
            return data
        }
        else throw new Error("Failed to login")
    }

    public async register(data: RegsiterData) {
        const response = await fetch(`${this.baseUrl}${REGISTER_ROUTE}`, {
            method: 'post',
            headers: this.basicHeaders,
            body: JSON.stringify(data)
        })

        if (!response.ok && response.status === 400) {
            const data = await response.json() as ResponseError
            throw new Error(data.error)
        }
        else if (response.ok && response.status === 200) {
            const data = await response.json() as LoginResponseSuccess
            return data
        }
        else throw new Error("Failed to register")
    }
}

const backendUrl = process.env.REACT_APP_BACKEND_URL
if (!backendUrl) throw new Error('Missed backendUrl.')

const client = new ApiClient(backendUrl)

export { client as ApiClient }