import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './components/Home/Home/Home';
import CustomerDashboard from './components/CustomerDashboard/CustomerDashboard/CustomerDashboard';
import AdminDashboard from './components/AdminDashboard/AdminDashboard/AdminDashboard';
import { createContext, useState } from 'react';
import Login from './components/Login/Login/Login';
import PrivateRoute from './components/Login/PrivateRoute/PrivateRoute';

export const UserContext = createContext();


function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <Router>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/login">
            <Login></Login>
          </Route>
          <PrivateRoute path="/dashboard/customer/:id">
            <CustomerDashboard></CustomerDashboard>
          </PrivateRoute>
          <PrivateRoute path="/dashboard/admin">
            <AdminDashboard></AdminDashboard>
          </PrivateRoute>
        </Switch>
      </Router>
    </UserContext.Provider>

  );
}

export default App;
