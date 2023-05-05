import { Dispatch } from "@reduxjs/toolkit";
import { ThemeAction, ThemeActionsEnum } from '../actions/theme'
import { Theme } from "types/theme";

export const changeTheme = (theme: Theme) => {
    return async (dispatch: Dispatch<ThemeAction>) => {
        dispatch({
            type: ThemeActionsEnum.CHANGE_THEME,
            payload: theme
        })
    };
};
