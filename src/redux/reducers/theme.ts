import { ThemeActionsEnum, ThemeAction } from "redux/actions/theme";
import { Theme } from 'types/theme'
import { themes } from 'themes'

import produce from 'immer'
import { Reducer } from "@reduxjs/toolkit";

const availableThemes = Object.keys(themes)

const lsTheme = localStorage.getItem('theme') as keyof typeof themes | null


const initialState: Theme = lsTheme && availableThemes.includes(lsTheme) ? themes[lsTheme] : themes.blue

const baseThemeReducer = (state: Theme = initialState, action: ThemeAction): Theme => {
    switch (action.type) {

        case ThemeActionsEnum.CHANGE_THEME: {
            const theme = action.payload
            localStorage.setItem('theme', theme.name)
            return theme
        }

        default:
            return state
    }
}

const themeReducer: Reducer<Theme, ThemeAction> = produce(baseThemeReducer)

export { themeReducer } 