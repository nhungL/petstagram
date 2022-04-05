import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoginPage from "./pages/LoginPage/LoginPage";
import ProfilePage from "./pages/ProfilePage/ProfilePage";
import UnfoundPage from "./pages/UnfoundPage/UnfoundPage";
import AccountPage from "./pages/AccountPage/AccountPage";
import ResponsiveAppBar from "./components/ResponsiveAppBar";
import HomePage from "./pages/HomePage/HomePage";
import AboutUsPage from "./pages/AboutUsPage/AboutUsPage";
import SettingPage from "./pages/SettingPage/SettingPage";

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
          <Route path="/about-us" element={<AboutUsPage />} />
          <Route path="/setting" element={<SettingPage />} />
          <Route path="*" element={<UnfoundPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
// import { useState } from 'react'
// function App() {
//     const [name, setName] = useState("");
//     const [email, setEmail] = useState("");
//     const handleOnSubmit = async (e) => {
//         e.preventDefault();
//         let result = await fetch(
//         'http://localhost:8000/register', {
//             method: "post",
//             body: JSON.stringify({ name, email }),
//             headers: {
//                 'Content-Type': 'application/json'
//             }
//         })
//         result = await result.json();
//         console.warn(result);
//         if (result) {
//             alert("Data saved successfully");
//             setEmail(""); 
//             setName("");
//         }
//     }
//     return (
//         <>
//             <h1>This is React WebApp </h1>
//             <form action="">
//                 <input type="text" placeholder="name" 
//                 value={name} onChange={(e) => setName(e.target.value)} />
//                 <input type="email" placeholder="email" 
//                 value={email} onChange={(e) => setEmail(e.target.value)} />
//                 <button type="submit" 
//                 onClick={handleOnSubmit}>submit</button>
//             </form>

//         </>
//     );
// }

// export default App;