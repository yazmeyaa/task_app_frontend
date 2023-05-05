import { ThemeActionsEnum, ThemeAction } from "redux/actions/theme";
import { Theme } from 'types/theme'
import * as themes from 'themes'

import produce from 'immer'
import { Reducer } from "@reduxjs/toolkit";

const initialState: Theme = themes.violet

const baseThemeReducer = (state: Theme = initialState, action: ThemeAction): Theme => {
    switch (action.type) {

        case ThemeActionsEnum.CHANGE_THEME: {
            const theme = action.payload
            return theme
        }

        default:
            return state
    }
}

const themeReducer: Reducer<Theme, ThemeAction> = produce(baseThemeReducer)

export { themeReducer } 