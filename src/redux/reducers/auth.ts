import { Reducer } from "@reduxjs/toolkit"
import produce from "immer"
import { AuthAction, AuthActionsEnum } from "redux/actions/auth"

interface AuthState {
    loading: boolean
    authState: boolean
}

const initialState: AuthState = {
    loading: false,
    authState: false,
}

const baseAuthReducer = (state: AuthState = initialState, action: AuthAction): AuthState => {
    switch (action.type) {
        case AuthActionsEnum.CHANGE_AUTH_STATE: {
            state.authState = action.payload
            return state
        }
        case AuthActionsEnum.CHANGE_LOADING_STATE: {
            state.loading = action.payload
            return state
        }
        default:
            return state
    }
}

const authReducer: Reducer<AuthState, AuthAction> = produce(baseAuthReducer)

export { authReducer } 