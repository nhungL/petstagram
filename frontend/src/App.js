import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoginPage from "./pages/LoginPage/LoginPage";
import UnfoundPage from "./pages/UnfoundPage";
import ResponsiveAppBar from "./pages/ProfilePage/ProfilePage";
import AccountPage from "./pages/AccountPage/AccountPage";

function App() {
  return (
    <div className="App">
      <ResponsiveAppBar />
      <BrowserRouter>
        <Routes>
          <Route path="/signin" element={<LoginPage />} />
          <Route path="/" element={<LoginPage />} />
          <Route path="/account" element={<AccountPage />} />
          <Route element={<UnfoundPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
