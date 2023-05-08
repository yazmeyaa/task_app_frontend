import { PrimaryInput } from "components/inputs/default_input";
import { Button, Container, Content, Fieldset, Form, Logo } from "./styled";
import { Task } from "@carbon/icons-react";
import { Link } from "react-router-dom";

function Login() {
  return (
    <Container>
      <Content>
        <Logo>
          <Task />
          <strong>task</strong>
          <span>app</span>
        </Logo>
        <Form>
          <Fieldset>
            <legend>Credentails</legend>
            <PrimaryInput autoComplete="username" placeholder="username" label="username" name="username" />
            <PrimaryInput type="password" label="password" placeholder="password"/>
          </Fieldset>
            <Button>login</Button>
        </Form>
        <small>Don't have account? <Link to='/register'>Create one!</Link></small>
      </Content>
    </Container>
  );
}

export { Login };
