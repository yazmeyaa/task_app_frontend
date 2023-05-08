import { Navigation, StyledLink } from "./styled";

function HeaderNavigation() {
  return (
    <Navigation>
      <ul>
        <li>
          <StyledLink to="/">Home</StyledLink>
        </li>
        <li><StyledLink to="/task">Tasks</StyledLink></li>
        <li><StyledLink to="/">About</StyledLink></li>
      </ul>
    </Navigation>
  );
}

export { HeaderNavigation };
