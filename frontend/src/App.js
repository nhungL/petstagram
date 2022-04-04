import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoginPage from "./pages/LoginPage/LoginPage";
import ProfilePage from "./pages/ProfilePage/ProfilePage";
import UnfoundPage from "./pages/UnfoundPage/UnfoundPage";
import AccountPage from "./pages/AccountPage/AccountPage";
import ResponsiveAppBar from "./components/ResponsiveAppBar/ResponsiveAppBar";
import HomePage from "./pages/HomePage/HomePage";
import AboutUsPage from "./pages/AboutUsPage/AboutUsPage";
import MapPage from "./pages/MapPage/MapPage";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <ResponsiveAppBar />
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/account" element={<AccountPage />} />
          <Route path="/signin" element={<LoginPage />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/about-us" element={<AboutUsPage />} />
          <Route path="/map" element={<MapPage />} />
          <Route path="*" element={<UnfoundPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
