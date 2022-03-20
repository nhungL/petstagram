import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoginPage from "./pages/LoginPage/LoginPage";
import ProfilePage from "./pages/ProfilePage/ProfilePage";
import UnfoundPage from "./pages/UnfoundPage";
import AccountPage from "./pages/AccountPage/AccountPage";
import ResponsiveAppBar from "./components/ResponsiveAppBar";
import HomePage from "./pages/HomePage/HomePage";

function App() {
  return (
    <div className="App">
      
      <ResponsiveAppBar />

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/account" element={<AccountPage />} />
          <Route path="/signin" element={<LoginPage />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route element={<UnfoundPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
