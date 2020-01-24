import React from 'react';
import { Route, Switch } from 'react-router-dom';



import logo from './logo.svg';
import './App.css';
import HomePage from './screens/HomePage'
import ArticlesPage from './screens/ArtilclesPage';

function App() {
  return (
    <div className="App">
        <Switch>
            <Route exact path="/"      component={HomePage} />
            <Route       path="/articles"  component={ArticlesPage} />
        </Switch>
    </div>
  );
}

export default App;
