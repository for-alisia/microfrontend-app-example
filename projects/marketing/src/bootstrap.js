import React from 'react';
import ReactDOM from 'react-dom'; 
import { createMemoryHistory, createBrowserHistory } from 'history';
import App from './App';

const mount = (el, { onNavigate, defaultHistory, initialPath }) => {
  const history = defaultHistory || createMemoryHistory();

  if (initialPath) {
    history.push(initialPath);
  }

  if (onNavigate) {
    history.listen(onNavigate);
  }
  
  ReactDOM.render(<App history={history} />, el);

  return {
    onParentNavigate({ pathname }) {
      if (history.location.pathname === pathname) return;
      history.push(pathname);
    }
  };
};

if (process.env.NODE_ENV === 'development') {
  const devRoot = document.querySelector('#_marketing-dev-root');

  const history = createBrowserHistory();

  if (devRoot) {
    mount(devRoot, { defaultHistory: history });
  }
}

export { mount }