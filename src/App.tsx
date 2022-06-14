import React from 'react'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import Game from './page/Game'
import NotFound from './page/NotFound'
export default function App() {
  return (
    <Router>
        <Switch>
            <Route path="/game" exact component={Game} />
            <Route path="/" component={NotFound} />
        </Switch>
    </Router>
  )
}
