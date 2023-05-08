import { FunctionComponent, ReactNode } from "react";
import { AppHeader } from "components/header";
import { GlobalStyle } from "components/global";
import { Content } from "./styled";

interface LayoutProps {
  children: ReactNode;
}

export const Layout: FunctionComponent<LayoutProps> = ({ children }) => {
  return (
    <>
      <GlobalStyle />
      <AppHeader />
      <Content>{children}</Content>
    </>
  );
};
