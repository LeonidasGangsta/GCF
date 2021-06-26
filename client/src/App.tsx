import React from 'react';
import {
  BrowserRouter as Router,
} from 'react-router-dom';
import './App.scss';

const App: React.FC = () => {
  return (
    <Router>
      <div className="main">
        <p>
          Hi there
        </p>
      </div>
    </Router>
  );
}

export default App;
