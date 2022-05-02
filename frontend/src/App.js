import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoginPage from "./pages/LoginPage/LoginPage";
import ProfilePage from "./pages/ProfilePage/ProfilePage";
import UnfoundPage from "./pages/UnfoundPage/UnfoundPage";
import AccountPage from "./pages/AccountPage/AccountPage";
import ResponsiveAppBar from "./components/ResponsiveAppBar/ResponsiveAppBar";
import HomePage from "./pages/HomePage/HomePage";
import AboutUsPage from "./pages/AboutUsPage/AboutUsPage";
import SettingPage from "./pages/SettingPage/SettingPage";
import MapPage from "./pages/MapPage/MapPage";
import SignInPage from "./pages/SignInPage/SignInPage";
import FindFriends from "./pages/FindFriends/FindFriends";

function App() {
  // const userSignin = useSelector((state) => state.userSignin);
  // const { userInfo, loading, error } = userSignin;
  return (
    <div className="App">
      <BrowserRouter>
        <ResponsiveAppBar />
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/account" element={<AccountPage />} />
          <Route path="/signin" element={<SignInPage />} />
          <Route path="/home" element={<HomePage />} />

          <Route path="/profile/:id" element={<ProfilePage />} />
          <Route path="/about-us" element={<AboutUsPage />} />
          <Route path="/settings" element={<SettingPage />} />
          <Route path="/map" element={<MapPage />} />
          <Route path="/find-friends" element={<FindFriends />} />
          <Route path="*" element={<UnfoundPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
