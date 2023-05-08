import { Link } from "react-router-dom";
import styled from "styled-components";
import { getThemeProperty } from "tools/getThemeProperty";

export const Navigation = styled.nav`
    &{
        display: flex;
        justify-content: space-around;
    }

    ul {
        height: 100%;
        display: flex;
        padding: 0px;
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
        color: ${props => getThemeProperty(props, 'text')};
        background-color: ${props => getThemeProperty(props, 'ui_primary')};
        transition: all 0.2s linear;

        &:hover{ 
            background-color: ${props => getThemeProperty(props, 'ui_primary_hover')};
        }
    }
`

export const StyledLink = styled(Link)`
    &{
        display: flex;
        align-items: center;
        justify-content: center;
        width: 100%;
        height: 100%;
        text-decoration: none;
    }
    &:visited {
        color: inherit;
    }
`