import React from 'react';
import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import Login from './pages/Login/Login';
import Home from './pages/Home/Home';
import './App.scss';

const App: React.FC = () => {

  return (
    <Router>
      <Layout>
        <Switch>
          <Route path="/login" component={Login} exact />
          <Route path="/" component={Home} exact />
          <Redirect to="/" />
        </Switch>
      </Layout>
    </Router>
  );
}

export default App;
