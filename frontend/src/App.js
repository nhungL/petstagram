import "./App.css";
import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import LoginPage from "./pages/LoginPage/LoginPage.js";
import ProfilePage from "./pages/ProfilePage/ProfilePage";

function App() {
  return (
    <Router>
      <Link className="nav-link" to="/profile">Course-Table</Link>
      <h1>asdfasf</h1>
      {/* <Route path="/signin" exact component={LoginPage} /> */}
    
      <Route path="/profile" component={ProfilePage} />
    </Router>
  );
}

export default App;
