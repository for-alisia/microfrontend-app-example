import React from 'react';
import { Switch, Route, Router } from 'react-router-dom';
import { StylesProvider, createGenerateClassName } from '@material-ui/core/styles';
import Signin from './components/Signin';
import Signup from './components/Signup';

const generateClassName = createGenerateClassName({
  productionPrefix: 'auth',
});

const App = ({ history, onSignin }) => {
  return (
  <div>
    <StylesProvider generateClassName={generateClassName}>
      <Router history={history}>
        <Switch>
          <Route path="/auth/signin" ><Signin onSignIn={onSignin} /></Route>
          <Route path="/auth/signup"><Signup onSignIn={onSignin} /></Route>
        </Switch>
      </Router>
    </StylesProvider>
  </div>
)
};

export default App;
