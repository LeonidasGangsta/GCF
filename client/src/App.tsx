import React from 'react';
import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import Login from './pages/Login/Login';
import Home from './pages/Home/Home';
import './App.scss';
import { UserContextProvider } from './context/UserContext';
import PrivateRouteComponent from './components/PrivateRoute/PrivateRoute';

const App: React.FC = () => {

  const PrivateRoute = (Component: React.FC, props?: any) => (
    <PrivateRouteComponent>
      <Component {...props} />
    </PrivateRouteComponent>
  );

  return (
    <Router>
      <UserContextProvider>
        <Layout>
          <Switch>
            <Route path="/login" component={Login} exact />
            <Route path="/" component={() => PrivateRoute(Home)} exact />
            <Redirect path="*" to="/" />
          </Switch>
        </Layout>
      </UserContextProvider>
    </Router>
  );
}

export default App;
