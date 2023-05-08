import styled from "styled-components";
import { getThemeProperty } from "tools/getThemeProperty";

export const Container = styled.div`
    &{
        display: flex;
        flex-direction: column;
        width: calc(32px * 8);
    }
`

export const Label = styled.label`
    &{
        text-transform: capitalize;
    }
`

export const Input = styled.input`
    &{
        border: none;
        padding: 0.5rem;
        background-color: ${props => getThemeProperty(props, 'ui_secondary')};
        color: ${props => getThemeProperty(props, 'text')}
    }
    &:-webkit-autofill,
    &:-webkit-autofill:hover, 
    &:-webkit-autofill:focus,
    &:-webkit-autofill,
    &:-webkit-autofill:hover,
    &:-webkit-autofill:focus,
    &:-webkit-autofill,
    &:-webkit-autofill:hover,
    &:-webkit-autofill:focus{
        border: 1px solid ${props => getThemeProperty(props, 'ui_secondary')};
        -webkit-text-fill-color:  ${props => getThemeProperty(props, 'text')};
        color:  ${props => getThemeProperty(props, 'text')} !important;
        background-color:  ${props => getThemeProperty(props, 'ui_primary')} !important;
        -webkit-box-shadow: none !important;
        transition: background-color 5000s ease-in-out 0s;
        -webkit-box-shadow: 0 0 0 1000px ${props => getThemeProperty(props, 'ui_secondary')} inset !important;
}

    &::placeholder {
        text-transform: capitalize;
        color: ${props => getThemeProperty(props, 'text') + '80'}
    }
`