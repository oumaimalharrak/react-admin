import { ColorModeContext, useMode } from "./Theme";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { Routes, Route, Outlet } from "react-router-dom";
import TopBar from './scenes/global/TopBar';
import Sidebar from "./scenes/global/Sidebar";







function App() {
  const [theme, colorMode] = useMode();

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="app">
          <Sidebar/>
          <main className="content">
            <TopBar/>
            {/* <Outlet/> */}
 
           </main>
     </div>
       </ThemeProvider>
     </ColorModeContext.Provider>
  );
}

export default App;
