import React, { useState } from "react";
import {
  createMuiTheme,
  makeStyles,
  ThemeProvider,
} from "@material-ui/core/styles";
import { red } from "@material-ui/core/colors";
import { orange } from "@material-ui/core/colors";

export interface MyThemeProviderProps {}

interface userContextData {
  toggleTheme: boolean;
  setToggleTheme(e: any): void;
}

const userContext = React.createContext({} as userContextData);

const MyThemeProvider: React.FC<MyThemeProviderProps> = (props) => {
  const { children } = props;
  const [toggleTheme, setToggleTheme] = useState(true);

  const themeLight = createMuiTheme({
    palette: {
      type: "light",
      primary: {
        main: "#41FFA7",
      },
      secondary: {
        main: "#FF657D",
      },
    },
    overrides: {
      MuiCssBaseline: {
        "@global": {
          button: {
            outline: "none !important",
          },
          "html::-webkit-scrollbar": {
            background: "#2C2648",
            width: "0.5em",
          },
          "html::-webkit-scrollbar-thumb": {
            background: "#FF657D",
            borderRadius: "0.25em",
          },
        },
      },
    },
  });
  const themeDark = createMuiTheme({
    palette: {
      type: "dark",
      primary: {
        main: "#41FFA7",
      },
      secondary: {
        main: "#FF657D",
      },
      background: {
        paper: "#413E69",
        default: "#322F5A",
      },
    },
    overrides: {
      MuiCssBaseline: {
        "@global": {
          button: {
            outline: "none !important",
          },
          "html::-webkit-scrollbar": {
            background: "#2C2648",
            width: "0.5em",
          },
          "html::-webkit-scrollbar-thumb": {
            background: "#FF657D",
            borderRadius: "0.25em",
          },
        },
      },
    },
  });

  return (
    <userContext.Provider
      value={{
        toggleTheme,
        setToggleTheme,
      }}
    >
      <ThemeProvider theme={toggleTheme ? themeDark : themeLight}>
        {children}
      </ThemeProvider>
    </userContext.Provider>
  );
};

function useTheme(): userContextData {
  const context = React.useContext(userContext);

  if (!context) {
    throw new Error("useTheme error");
  }
  return context;
}

export { MyThemeProvider, useTheme };
