import { ReactNode } from "react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { store } from "redux/store";
import { Theme } from "./theme";

interface AppProviderProps {
  children: ReactNode;
}

export function AppProviders({ children }: AppProviderProps) {
  return (
    <Provider store={store}>
      <Theme>
        <BrowserRouter>{children}</BrowserRouter>
      </Theme>
    </Provider>
  );
}
