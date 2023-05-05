export interface ThemeColors {
    background: string
    text: string
    text_hover: string
    ui_primary: string
    ui_primary_hover: string
    ui_secondary: string
    ui_secondary_hover: string
}

export interface Theme {
    name: string
    colors: ThemeColors
}