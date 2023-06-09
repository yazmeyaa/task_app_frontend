import { createGlobalStyle } from "styled-components";
import { getThemeProperty } from "tools/getThemeProperty";

export const GlobalStyle = createGlobalStyle`
    html {
        height: 100%;
    }
    body{ 
        margin: 0px;
        height: 100%;
        padding: 0px;
        color: ${props => getThemeProperty(props, 'text')};
        background-color:  ${props => getThemeProperty(props, 'background')};
        transition: background-color 0.2s linear;
        font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    }
    #root {
        display: flex;
        flex-direction: column;
        height: 100%;
    }
`