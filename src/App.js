import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import { Provider } from 'react-redux';
import store from './store';
import { rrfProps } from './store';
import './App.css';
import AppNavbar from './components/layout/AppNavbar';
import Dashboard from './components/layout/Dashboard';
import { ReactReduxFirebaseProvider } from 'react-redux-firebase';
import Addclient from './components/clients/Addclient';
import ClientDetails from './components/clients/ClientDetails';
import EditClient from './components/clients/EditClient';

function App() {
  return (
    <Provider store={store}>
      <ReactReduxFirebaseProvider {...rrfProps}>
        <Router>
          <div className="App">
            <AppNavbar />
            <div className="container">
              <Switch>
                <Route exact path="/" component={Dashboard} />
                <Route exact path="/client/add" component={Addclient} />
                <Route exact path="/client/:id" component={ClientDetails} />
                <Route exact path="/client/edit/:id" component={EditClient} />
              </Switch>
            </div>
          </div>
        </Router>
      </ReactReduxFirebaseProvider>
    </Provider>
  );
}

export default App;
