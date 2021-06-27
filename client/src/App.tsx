import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import Login from './pages/Login/Login';
import Home from './pages/Home/Home';
import './App.scss';
import { UserContextProvider } from './context/UserContext';

const App: React.FC = () => {

  return (
    <Router>
      <UserContextProvider>
        <Layout>
          <Switch>
            <Route path="/login" component={Login} exact />
            <Route path="/" component={Home} exact />
          </Switch>
        </Layout>
      </UserContextProvider>
    </Router>
  );
}

export default App;
