import { AppRoutes } from "./config/routes/app-routes";
import GlobalStyle from "./styles/globalStyle";
import { ThemeProvider } from "styled-components";
import theme from "./styles/theme";

export const App = () => {

  return (
    <ThemeProvider theme={theme}>
        <GlobalStyle />
        <AppRoutes />
    </ThemeProvider>
  );
};
