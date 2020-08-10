import React from 'react';
import { Route, Switch } from 'react-router-dom';
import ReposListContainer from './views/components/ReposListContainer';

function App() {
  return (
    <Switch>
      <Route exact path="/" component={ReposListContainer} />
      <Route exact path="/:pageNumber" component={ReposListContainer} />
    </Switch>
  );
}

export default App;
