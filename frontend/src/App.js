import React, {  Suspense } from 'react';
import { HashRouter as Router, Redirect, Route, Switch } from "react-router-dom";
import MainCards from './main/components/cards/MainCards'
import LogoSpinner from './main/components/ui/loader'

const App = () => {
  return (
    <Router>
    <Suspense fallback={<LogoSpinner />}>
    <Switch>
      <Route exact path='/' component={MainCards} />
      </Switch>
    </Suspense>
    </Router>
  );
}

export default App;