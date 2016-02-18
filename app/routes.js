import React from 'react';
import { Route } from 'react-router';
import App from './containers/App';
import ProjectPage from './containers/ProjectPage';

export default (
  <Route path="/" component={App}>
    <Route path="projects/:project" component={ProjectPage} />
  </Route>
);
