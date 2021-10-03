import "./App.css";
import Login from "./pages/Login";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import { useEffect } from "react";
import PrivateRoutes from "./routes/PrivateRoutes";

function App() {
  useEffect(() => {
    if (localStorage.getItem("tokenUser") === null) {
      localStorage.setItem("tokenUser", "");
    }
  }, []);
  return (
    <div className="container">
      <div className="wrapper">
        <Router>
          <Switch>
            <Route path="/login" exact component={Login} />
            <PrivateRoutes component={Home} path="/" />
          </Switch>
        </Router>
      </div>
    </div>
  );
}

export default App;
