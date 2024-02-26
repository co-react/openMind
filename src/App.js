import { BrowserRouter, Routes, Route } from "react-router-dom";

import KDH from "./components/kdh/KDH";
import NES from "./components/nes/NES";
import KYE from "./components/kye/KYE";
import KYH from "./components/kyh/KYH";
import PGB from "./components/pgb/PGB";
import MainTest from "./pages/MainTest";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainTest />}></Route>
        <Route path="/list"></Route>
        <Route path="/post">
          <Route path=":id"></Route>
          <Route path=":id/answer"></Route>
        </Route>
        {/* 이하 테스트용 Route */}
        <Route path="/kdh" element={<KDH />}></Route>
        <Route path="/nes" element={<NES />}></Route>
        <Route path="/kye" element={<KYE />}></Route>
        <Route path="/kyh" element={<KYH />}></Route>
        <Route path="/pgb" element={<PGB />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
