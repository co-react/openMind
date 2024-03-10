import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import ThemeModeButton from "./components/buttons/ThemeModeButton";
import KDH from "./components/kdh/KDH";
import KYE from "./components/kye/KYE";
import NES from "./components/nes/NES";
import PGB from "./components/pgb/PGB";

import CardPage from "./pages/CardPage";
import ListPage from "./pages/ListPage";
import Main from "./pages/Main";
import MainTest from "./pages/MainTest";

import { lightTheme, darkTheme } from "./style/darkStyle";
import GlobalStyles from "./style/GlobalStyles";

function App() {
  const localThemeMode = localStorage.getItem("theme") || "lightTheme";
  const [themeMode, setThemeMode] = useState(localThemeMode);

  const toggleTheme = () => {
    const newThemeMode = themeMode === "lightTheme" ? "darkTheme" : "lightTheme";
    setThemeMode(newThemeMode);
    localStorage.setItem("theme", newThemeMode);
  };

  const theme = themeMode === "lightTheme" ? lightTheme : darkTheme;

  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <BrowserRouter>
          <Routes>
            <Route path="/component" element={<MainTest />} />
            <Route path="/" element={<Main />} />
            <Route path="/list" element={<ListPage />} />
            <Route path="/post">
              <Route path=":id" element={<CardPage />} />
              <Route path=":id/answer" element={<CardPage />} />
            </Route>
            {/* 이하 테스트용 Route */}
            <Route path="/kdh" element={<KDH />} />
            <Route path="/nes" element={<NES />} />
            <Route path="/kye" element={<KYE />} />
            <Route path="/pgb" element={<PGB />} />
          </Routes>
        </BrowserRouter>
        <ThemeModeButton themeMode={themeMode} toggleTheme={toggleTheme}></ThemeModeButton>
      </ThemeProvider>
    </>
  );
}

export default App;
