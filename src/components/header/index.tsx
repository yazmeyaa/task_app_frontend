import { useNavigate, Link } from "react-router-dom";
import {
  Container,
  GlobalActionsContainer,
  HeaderActions,
  HeaderDivider,
  Logo,
  StyledLink
} from "./styled";
import { HeaderNavigation } from "./components/navigation";
import { ThemeChanger } from "./components/theme_changer";
import { AuthElement } from "./components/auth_component";

export const AppHeader = () => {
  const navigate = useNavigate();

  return (
    <Container>
      <Logo >
        <StyledLink to='/home'>Task app</StyledLink>
      </Logo>
      <HeaderDivider />
      <HeaderActions>
        <HeaderNavigation />
        <GlobalActionsContainer>
          <ThemeChanger />
          <AuthElement />
        </GlobalActionsContainer>
      </HeaderActions>
    </Container>
  );
};
