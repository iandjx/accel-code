import React from "react";

import Dashboard from "./layouts/Dashboard";
import { orange } from "@material-ui/core/colors";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";

// This replaces the textColor value on the palette
// and then update the keys for each component that depends on it.
// More on Colors: http://www.material-ui.com/#/customization/colors
const theme = createMuiTheme({
  palette: {
    textColor: orange
  },
  appBar: {
    height: 400
  }
});

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Dashboard />
    </ThemeProvider>
  );
};
export default App;
