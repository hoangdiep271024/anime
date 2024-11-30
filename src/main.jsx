import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import theme from "./theme";
import { Experimental_CssVarsProvider as CssVarsProvider } from '@mui/material/styles';
import CssBaseline from "@mui/material/CssBaseline";
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <CssVarsProvider theme={theme}>
      <CssBaseline />
      <App />
    </CssVarsProvider>
  </StrictMode>
);
