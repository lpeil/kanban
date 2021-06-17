import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Board from '../screens/Board';
import HomePage from '../screens/Home';
import NotFoundPage from '../screens/NotFound';

import {
  Navbar, LeftMenu, Body, Content, Modals,
} from '../components';

const Routes = () => (
  <BrowserRouter>
    <Navbar />
    <Body>
      <LeftMenu />
      <Content>
        <Switch>
          <Route path="/" exact component={HomePage} />
          <Route path="/b/:name" exact component={Board} />
          <Route path="*" component={NotFoundPage} />
        </Switch>
      </Content>
    </Body>
    <Modals />
  </BrowserRouter>
);

export default Routes;
