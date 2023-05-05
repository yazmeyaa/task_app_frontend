import { CHECK_AUTH_ROUTE, CREATE_TASK_ROUTE, DELETE_TASK_ROUTE, GET_TASK_LIST_ROUTE, GET_TASK_ROUTE, LOGIN_ROUTE, REGISTER_ROUTE, UPDATE_TASK_ROUTE } from 'api/apiRoutes'
import { Task } from 'types/task'

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

type CreateTaskBodyType = Pick<Task, 'description' | 'title' | 'taskEndsAt'>

export interface GetListRequestParams {
    page: number
    perPage: number
}

export interface GetListReponseSuccess {
    message: string
    totalItems: number
    totalPages: number
    data: Task[]
    page: number
    perPage: number
}

interface GetListReponseError {
    error: string
}

class ApiClient {
    private baseUrl: string
    private baseHeaders = new Headers({
        "Content-Type": "application/json",
    })

    constructor(baseUrl: string) {
        this.baseUrl = baseUrl
    }

    public async login(credentials: LoginCredentails): Promise<Error | LoginResponseSuccess> {

        const response = await fetch(`${this.baseUrl}${LOGIN_ROUTE}`, {
            method: 'post',
            headers: this.baseHeaders,
            body: JSON.stringify(credentials),
            credentials: 'include'
        })

        if (response.ok && response.status === 200) {
            const data = await response.json() as LoginResponseSuccess
            return data
        }

        else {
            const data = await response.json() as ResponseError
            throw new Error(data.error)
        }
    }

    public async register(data: RegsiterData) {
        const response = await fetch(`${this.baseUrl}${REGISTER_ROUTE}`, {
            method: 'post',
            headers: this.baseHeaders,
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

    public async checkAuth(): Promise<Error | LoginResponseSuccess> {
        const response = await fetch(`${this.baseUrl}${CHECK_AUTH_ROUTE}`, {
            method: 'get',
            credentials: 'include',
            headers: this.baseHeaders,
        })
        if (!response.ok) {
            const data = await response.json() as ResponseError
            throw new Error(data.error)
        } else {
            const data = await response.json() as LoginResponseSuccess
            return data
        }
    }

    public async loadList(params: GetListRequestParams): Promise<Error | GetListReponseSuccess> {
        const { page, perPage } = params
        const [parsedPage, parsedPerPage] = [page, perPage].map(String)
        const requestParams = new URLSearchParams({
            page: parsedPage,
            perPage: parsedPerPage
        })

        const response = await fetch(`${this.baseUrl}${GET_TASK_LIST_ROUTE}?` + requestParams, {
            method: 'get',
            headers: this.baseHeaders,
            credentials: 'include',
        })

        if (response.status === 200 && response.ok) {
            const data = await response.json() as GetListReponseSuccess
            return data
        }
        else {
            const data = await response.json() as GetListReponseError
            throw new Error(data.error)
        }

    }

    public async createTask(properties: CreateTaskBodyType) {
        const url = this.baseUrl + CREATE_TASK_ROUTE
        const response = await fetch(url, {
            headers: this.baseHeaders,
            credentials: 'include',
            method: 'post',
            body: JSON.stringify(properties)
        })

        if (response.status === 200 && response.ok) {
            const data = await response.json() as GetListReponseSuccess
            return data
        }
        else {
            const data = await response.json() as GetListReponseError
            throw new Error(data.error)
        }
        
    }
}

const backendUrl = process.env.REACT_APP_BACKEND_URL
if (!backendUrl) throw new Error('Missed backendUrl.')

const client = new ApiClient(backendUrl)

export { client as ApiClient }