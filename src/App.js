import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./reset.css";
import Home from "./pages/Home.js";
import StartPage from "./pages/StartPage.js";
import NotFoundPage from "./pages/NotFoundPage.js";
import AuthKakao from "./pages/AuthKakao.js";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<StartPage />} />
          <Route path="/auth/kakao" element={<AuthKakao />} />
          <Route path="/home" element={<Home />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
export default App;
