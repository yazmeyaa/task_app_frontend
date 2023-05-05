import { FunctionComponent, ReactNode } from "react";
import { AppHeader } from "components/header/header";
import { Content } from "carbon-components-react";
import { GlobalStyle } from "components/global";

interface LayoutProps {
  children: ReactNode;
}

export const Layout: FunctionComponent<LayoutProps> = ({ children }) => {
  return (
    <main>
        <GlobalStyle />
      <AppHeader />
      {children}
    </main>
  );
};
