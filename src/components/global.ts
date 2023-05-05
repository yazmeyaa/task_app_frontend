import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    body{ 
        margin: 0px;
        padding: 0px;
        background-color:  ${props => props.theme.colors.background};
    }
`