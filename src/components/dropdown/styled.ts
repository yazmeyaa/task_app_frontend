import styled from "styled-components"
import { getThemeProperty } from "tools/getThemeProperty"

export const Container = styled.div`
    &{
        position: relative;
        display: inline-block;
    }
`

export const Button = styled.button`
    &{
        box-sizing: border-box;
        height: calc(64px - 8px);
        background-color: ${props => props.theme.colors.ui_secondary};
        text-transform: capitalize;
        color: white;
        padding: 16px;
        font-size: 16px;
        border: none;
        cursor: pointer;
        transition: background-color 0.2s linear;
    }

    &:hover, &:focus {
        background-color: ${props => props.theme.colors.ui_primary_hover};
    }
`

interface DropdownContentProps {
    open: boolean
}

export const DropdownContent = styled.div<DropdownContentProps>`
    &{
        display: ${props => props.open ? 'flex' : 'none'};
        flex-direction: column;
        gap: 2px;
        position: absolute;
        border: 2px solid ${props => getThemeProperty(props, 'ui_primary')};
        background-color: ${props => getThemeProperty(props, 'ui_primary')};
        min-width: 145px;
        box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
        z-index: 1;
    }
`

export const DropdownItem = styled.button`
    &{
        border: 0px;
        width: 100%;
        background-color: ${props => getThemeProperty(props, 'ui_secondary')};
        color: ${props => getThemeProperty(props, 'text')};
        text-transform: capitalize;
        text-align: left;
        padding: 12px 16px;
        text-decoration: none;
        cursor: pointer;
        display: block;
        transition: all 0.2s linear ;
    }

    &:hover {
        background-color: ${props => getThemeProperty(props, 'ui_secondary_hover')};
    }
`