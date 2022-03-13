import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoginPage from "./pages/LoginPage/LoginPage";
import UnfoundPage from "./pages/UnfoundPage";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/signin" element={<LoginPage />} />
          <Route path="/" element={<LoginPage />} />
          <Route element={<UnfoundPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
