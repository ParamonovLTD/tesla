import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import 'antd/dist/antd.css';
import Header from './shared/components/Header';
import HomePage from './pages/Home';

const App = () => {
  return (
    <div className="App">
      <Router>
        <Header />
        <div className="Content">
          <Switch>
            <Route path="/" component={HomePage} />
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
