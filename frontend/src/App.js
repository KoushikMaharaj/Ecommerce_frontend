import "./App.css";
import LoginForm from "./components/LoginComponent/loginForm";

import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import RegistrationForm from "./components/RegistrationComponent/RegistrationForm";

function App() {
  return <RegistrationForm/>;
 /*  return (
    <Router>
      <Link to="/login">Login</Link>
      <Route exact path="/login" component={LoginForm} />
    </Router>
  ); */
}

export default App;
