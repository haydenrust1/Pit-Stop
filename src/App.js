import React from 'react'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Home from './pages/Home'

function App() {
  return(
    <Router>
      <Switch>
        <Route path={['/', '/home']}>
          <Home />
        </Route>
      </Switch>
    </Router>
  )
}

export default App;