import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import KDH from "./components/kdh/KDH";
import KYE from "./components/kye/KYE";
import NES from "./components/nes/NES";
import PGB from "./components/pgb/PGB";

import ListPage from "./pages/ListPage";
import Main from "./pages/Main";
import MainTest from "./pages/MainTest";

import { lightTheme, darkTheme } from "./style/darkStyle";
import GlobalStyles from "./style/GlobalStyles";

function App() {
  const localThemeMode = window.localStorage.getItem("theme") || "lightTheme";
  const [themeMode, setThemeMode] = useState(localThemeMode);

  const toggleTheme = () => {
    const newThemeMode =
      themeMode === "lightTheme" ? "darkTheme" : "lightTheme";
    setThemeMode(newThemeMode);
    window.localStorage.setItem("theme", newThemeMode);
  };

  const theme = themeMode === "lightTheme" ? lightTheme : darkTheme;

  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<MainTest />}></Route>
            <Route path="/main" element={<Main />}></Route>
            <Route path="/list"></Route>
            <Route path="/list" element={<ListPage />}></Route>
            <Route path="/post">
              <Route path=":id"></Route>
              <Route path=":id/answer"></Route>
            </Route>
            {/* 이하 테스트용 Route */}
            <Route
              path="/kdh"
              element={<KDH themeMode={themeMode} toggleTheme={toggleTheme} />}
            ></Route>
            <Route path="/nes" element={<NES />}></Route>
            <Route path="/kye" element={<KYE />}></Route>
            <Route path="/pgb" element={<PGB />}></Route>
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </>
  );
}

export default App;
