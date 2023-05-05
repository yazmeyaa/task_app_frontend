export enum AuthActionsEnum {
    CHANGE_AUTH_STATE = "CHANGE_AUTH_STATE",
    CHANGE_LOADING_STATE = "CHANGE_LOADING_STATE_ACTION",
}

export type ChangeAuthStateAction = {
    type: AuthActionsEnum.CHANGE_AUTH_STATE,
    payload: boolean
}

export type ChangeLoadingStateAction = {
    type: AuthActionsEnum.CHANGE_LOADING_STATE,
    payload: boolean
}

export type AuthAction = ChangeAuthStateAction | ChangeLoadingStateAction