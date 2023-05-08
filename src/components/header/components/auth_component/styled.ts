import styled from "styled-components";
import { getThemeProperty } from "tools/getThemeProperty";
import {Link} from 'react-router-dom'

export const AuthButton = styled(Link)`
    &{
        display: flex;
        justify-content: center; 
        align-items: center;
        width: calc(64px - 8px);
        aspect-ratio: 1/1;
        background-color: ${props => getThemeProperty(props, 'ui_secondary')};
        border: none;
        cursor: pointer;
        transition: background-color 0.2s linear;
    }

    &>svg {
        fill: ${props => getThemeProperty(props, 'text')};
        transition: background-color 0.2s linear;
    }

    &:hover{
        background-color: ${props => getThemeProperty(props, 'ui_primary_hover')};
        &>svg {
           fill: ${props => getThemeProperty(props, 'text_hover')} 
        }
    }
`