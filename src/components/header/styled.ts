import styled from 'styled-components'

export const Container = styled.header`
    &{
        color: ${props => props.theme.colors.text};
        display: flex;
        padding: 0px 1rem;
        height: 64px;
        box-sizing: border-box;
        align-items: center;
        background-color: ${props => props.theme.colors.ui_primary};
        transition: all 0.2s linear;
    }
`

export const Logo = styled.div`
    &{
        margin: 0px 1rem;
        font-variant: small-caps;
        font-size: 1.5rem;
        user-select: none;
    }
`

export const Navigation = styled.nav`
    &{
        display: flex;
        height: 100%;
        justify-content: space-around;
    }

    ul {
        height: 100%;
        display: flex;
        padding: 0px 1rem;
        margin: 0px;
        gap: 0.5rem;
        list-style-type: none;
        justify-content: space-between;
        align-items: center;
    }

    ul>li {
        display: flex;
        align-items: center;
        padding: 0px 1rem;
        height: 100%;
        min-width: 64px;
        justify-content: center;
        cursor: pointer;
        user-select: none;
        color: ${props => props.theme.colors.text};
        background-color: ${props => props.theme.colors.ui_primary};
        transition: all 0.2s linear;

        &:hover{ 
            background-color: ${props => props.theme.colors.ui_primary_hover};
        }
    }
`