import React, { lazy, Suspense, useState, useEffect } from 'react';
import { Router, Redirect, Route, Switch } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import { StylesProvider, createGenerateClassName } from '@material-ui/core/styles';
import Header from './components/Header';
import Progress from './components/Progress';

const MarketingLazy = lazy(() => import('./components/MarketingApp'));
const AuthLazy = lazy(() => import('./components/AuthApp'));
const DashboardLazy = lazy(() => import('./components/DashboardApp'));

const generateClassName = createGenerateClassName({
  productionPrefix: 'container',
});

const history = createBrowserHistory();

const App = () => {
  const [isSignin, setIsSignin] = useState(false);

  useEffect(() => {
    if (isSignin) {
      history.push('/dashboard');
    }
  }, [isSignin]);

  return (
  <Router history={history}>
    <StylesProvider generateClassName={generateClassName}>
      <div>
        <Header isSignedIn={isSignin} onSignOut={() => setIsSignin(false)}/>
        <Suspense fallback={<Progress />}>
          <Switch>
            <Route path="/auth">
              <AuthLazy onSignin={() => setIsSignin(true)} />
            </Route>
            <Route path="/dashboard">
              {!isSignin && <Redirect to="/" />}
              <DashboardLazy />
            </Route>
            <Route path="/" component={MarketingLazy} />
          </Switch>
        </Suspense>
      </div>
    </StylesProvider>
  </Router>
)
};

export default App;