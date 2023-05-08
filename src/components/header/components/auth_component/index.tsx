import { Login } from "@carbon/icons-react";
import { AuthButton } from "./styled";

function AuthElement() {
  return (
    <AuthButton to="/login">
      <Login width="50%" height="50%" />
    </AuthButton>
  );
}

export { AuthElement };
