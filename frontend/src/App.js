import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import LoginPage from "./pages/LoginPage/LoginPage.js";

function App() {
  return (
    <div className="App">
      <Router>
        <Route path="/signin" exact component={LoginPage} />
      </Router>
    </div>
  );
}

export default App;
