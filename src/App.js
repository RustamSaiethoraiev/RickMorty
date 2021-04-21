import React from 'react';
import './App.css'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Navigation from './components/Navigation'
import Characters from './pages/Characters'
import AddOwnHero from './pages/AddOwnHero'
import Person from './pages/Person'

function App() {
  return (
    <Router>
      <Navigation />
      <Switch>
        <Route path="/addOwnHero" component={AddOwnHero} />
        <Route path="/:id" component={Person} />
        <Route path="/" component={Characters} />
      </Switch>
    </Router>
  )
}

export default App;
