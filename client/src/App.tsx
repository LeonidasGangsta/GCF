import React from 'react';
import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import Login from './pages/Login/Login';
import Home from './pages/Home/Home';
import { UserContext } from './context/UserContext';
import './App.scss';

const App: React.FC = () => {
  const { UserDataProvider } = UserContext();

  return (
    <Router>
      <UserDataProvider>
        <Layout>
          <Switch>
            <Route path="/login" component={Login} exact />
            <Route path="/" component={Home} exact />
            <Redirect to="/login" />
          </Switch>
        </Layout>
      </UserDataProvider>
    </Router>
  );
}

export default App;
