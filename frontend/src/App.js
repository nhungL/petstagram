import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoginPage from "./pages/LoginPage/LoginPage";
import ProfilePage from "./pages/ProfilePage/ProfilePage";
import UnfoundPage from "./pages/UnfoundPage";
import ResponsiveAppBar from "./components/ResponsiveAppBar";

function App() {
  return (
    <div className="App">
      
      <ResponsiveAppBar />

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/signin" element={<LoginPage />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route element={<UnfoundPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
