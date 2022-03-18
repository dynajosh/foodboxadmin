import React, { useState } from 'react';
import "./App.css";
import "line-awesome/dist/line-awesome/css/line-awesome.min.css";
import "antd/dist/antd.css";
// import HomePage from "./components/HomePage";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import AuthPage from "./components/auth/AuthPage";
import { AuthProvider } from "./components/auth/auth-context/AuthContext";
import Signin from "./components/auth/Signin";
import DashBoard from "./components/admin-dashboard/DashBoard";
import CompanyProfile from "./components/admin-dashboard/main/main-component/orders/Orders";
import ProtectedRoute from "./components/ProtectedRoutes";

function App() {
  const [user, setUser] = useState(false);
  return (
    <AuthProvider>
      <Router>
        <div className="App">
          <Switch>
            {/* <Route exact path="/" component={HomePage} /> */}
            <Route exact path="/" component={Signin} />
            <Route path="/signin" component={Signin} />
            {/* <Route path="/dashboard" component={DashBoard} /> */}
            <Route exact path="/profile" component={CompanyProfile} />
            <ProtectedRoute path="/dashboard" component={DashBoard} />
          </Switch>
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;
