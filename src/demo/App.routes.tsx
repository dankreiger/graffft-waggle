import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { Projects } from './pages/Projects/Projects';
import { Home } from './pages/Home/Home';
import { About } from './pages/About/About';
import { Contact } from './pages/Contact/Contact';

export const AppRoutes = () => (
  <Switch>
    <Route path="/projects" component={Projects} />
    <Route path="/about" component={About} />
    <Route path="/contact" component={Contact} />
    <Route path="/" component={Home} />
  </Switch>
);
