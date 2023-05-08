import styled from "styled-components";
import { getThemeProperty } from "tools/getThemeProperty";

export const Container = styled.div`
  & {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

export const Content = styled.div`
  & {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: ${(props) => getThemeProperty(props, "ui_primary")};
    padding: 2rem;
    gap: 1rem;
  }
`;

export const Logo = styled.figure`
  & {
    margin: 0px;
    display: flex;
    align-items: center;
    font-size: 2rem;
  }
  & > strong {
    color: ${(props) => getThemeProperty(props, "text")};
    text-transform: capitalize;
    font-variant: small-caps;
    user-select: none;
  }
  & > span {
    font-variant: small-caps;
    user-select: none;
  }
  & > svg {
    height: 3rem;
    width: 3rem;
    margin-right: 0.5rem;
  }
`;

export const Form = styled.form`
  & {
    display: flex;
    flex-direction: column;
  }
`;


export const Fieldset = styled.fieldset`
    &{
        display: flex;
        flex-direction: column;
        gap: 1rem;
        padding: 1rem;
        margin: 1rem 0.5rem;
    }
`

export const Button = styled.button`
  &{
    flex-grow: 0;
    flex-shrink: 0;
    flex-basis: content;
    text-transform: capitalize;
  }
`