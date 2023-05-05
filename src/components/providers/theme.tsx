import { useAppSelector } from "hooks/redux";
import { FC, ReactNode } from "react";
import { ThemeProvider } from "styled-components";

interface ThemeProviderProps {
  children: ReactNode;
}

export const Theme: FC<ThemeProviderProps> = ({ children }) => {
  const currentTheme = useAppSelector((state) => state.theme);

  return <ThemeProvider theme={currentTheme}>{children}</ThemeProvider>;
};
