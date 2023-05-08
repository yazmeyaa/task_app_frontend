import styled from "styled-components";
import { getThemeProperty } from "tools/getThemeProperty";

export const Picker = styled.select`
    &{
        appearance: none;
        display: block;
        font-size: 16px;
        font-family: inherit;
        line-height: 1.3;
        box-sizing: border-box;
        margin: 0px;
        border: 1px solid #aaa;
        box-shadow: 0 1px 0 1px rgba(0, 0, 0, 0.04);
        padding: 0.5rem 1rem;
        cursor: pointer;
        text-transform: capitalize;
        letter-spacing: 2px;
        background-color: ${props => getThemeProperty(props, 'ui_secondary')};
        color: ${props => getThemeProperty(props, 'text')};
    }
`

interface PickerOptionProps {
    backgroundColor: string
    fontColor: string
}

export const PickerOption = styled.option<PickerOptionProps>`
    &{

        padding: 0.5rem 1rem;
        height: 1rem;
        background-color: ${props => props.backgroundColor};
        color: ${props => props.fontColor};
    }

    &:checked, &:focus, &:hover, &[selected] {
        background-color: ${props => props.backgroundColor};
    }

    &:focus {

    }
`