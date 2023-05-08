import { DefaultTheme, ThemeProps } from "styled-components";


function getThemeProperty(context: ThemeProps<DefaultTheme>, propertyName: keyof DefaultTheme['colors']) {
    return context.theme.colors[propertyName]
}

export { getThemeProperty }