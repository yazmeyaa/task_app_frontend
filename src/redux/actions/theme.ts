import { Theme } from "types/theme"

export enum ThemeActionsEnum {
    CHANGE_THEME = "CHANGE_THEME"
}

export type ChangeTheme = {
    type: ThemeActionsEnum.CHANGE_THEME,
    payload: Theme
}

export type ThemeAction = ChangeTheme