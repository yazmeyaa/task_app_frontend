import styled from 'styled-components'
import { getThemeProperty } from 'tools/getThemeProperty'
import { Link } from 'react-router-dom'

export const Container = styled.header`
    &{
        flex: 0 0 auto;
        color: ${props => getThemeProperty(props, 'text')};
        display: flex;
        padding: 0px 1rem;
        height: 64px;
        box-sizing: border-box;
        align-items: center;
        background-color: ${props => getThemeProperty(props, 'ui_primary')};
        transition: all 0.2s linear;
    }
`

export const StyledLink = styled(Link) `
    &{
        text-decoration: none;
        color: ${props => getThemeProperty(props, 'text')};
    }
    &:visited {
        color: ${props => getThemeProperty(props, 'text')};
    }
`

export const Logo = styled.div`
    &{
        flex-shrink: 0;
        margin: 0px 1rem;
        font-variant: small-caps;
        font-size: 1.5rem;
        user-select: none;
        width: fit-content
    }
`

export const HeaderActions = styled.div`
    &{
        display: flex;
        align-items: stretch;
        justify-content: space-between;
        flex-basis: 100%;
    }
`

export const GlobalActionsContainer = styled.div`
    &{
        display: flex;
        justify-content: space-around;
        align-items: center;
        gap: 0.5rem;
        padding: 0px 1rem;
    }
`

export const HeaderDivider = styled.div`
    &{
        margin: 0px 8px;
        display: block;
        width: 3px;
        height: 80%;
        border-radius: 8px;
        background-color: ${props => getThemeProperty(props, 'ui_secondary')};
    }
`