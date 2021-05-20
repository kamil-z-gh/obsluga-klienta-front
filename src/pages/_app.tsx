import { Provider } from "react-redux";
import type { AppProps } from "next/app";
import CreateGlobalStyle from "styles/globalStyles.styled";
import store from "../app/store";
import { StylesProvider, createMuiTheme } from "@material-ui/core/styles";
import { ThemeProvider as StyledThemeProvider } from "styled-components";

function MyApp({ Component, pageProps }: AppProps) {
  const theme = createMuiTheme();
  return (
    <Provider store={store}>
      <StylesProvider injectFirst>
        <StyledThemeProvider theme={theme}>
          <CreateGlobalStyle />
          <Component {...pageProps} />
        </StyledThemeProvider>
      </StylesProvider>
    </Provider>
  );
}

export default MyApp;
