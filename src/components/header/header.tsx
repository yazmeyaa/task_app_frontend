import { useNavigate } from "react-router-dom";
import { Container, Logo, Navigation } from "./styled";

export const AppHeader = () => {
  const navigate = useNavigate();

  return (
    <Container>
      <Logo>Task app</Logo>
      <Navigation>
        <ul>
          <li>Home</li>
          <li>Tasks</li>
          <li>About</li>
        </ul>
      </Navigation>
    </Container>
  );
};
