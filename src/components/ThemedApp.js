import App from "./App";
import React from "react";
import { createGlobalStyle, ThemeProvider } from "styled-components";
import { connect } from "react-redux";
import { changeTheme } from "../redux/actions";

const GlobalStyle = createGlobalStyle`
  body {
    color: ${props => (props.theme.bg === "light" ? "#2f3a90" : "#6788e2")};
    background: ${props => (props.theme.bg === "light" ? "azure" : "#1c222b")};
    box-sizing: border-box;
    font-family: "American Typewriter", Helvetica;
  }`;

const ThemedApp = ({ theme }) => {
  const darkTheme = {
    bg: theme
  };
  return (
    <ThemeProvider theme={darkTheme}>
      <GlobalStyle whiteColor={false} />
      <App changeTheme={changeTheme} />
    </ThemeProvider>
  );
};

const mapState = state => {
  return {
    theme: state.themes.theme
  };
};

export default connect(mapState)(ThemedApp);
