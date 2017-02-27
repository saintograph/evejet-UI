import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './App';
import LandingPage from './views/landing-page';
import SignUp from './views/sign-up';
import EventDisplay from './views/event-display';
import CreateEvent from './views/create-event';
import EventDetails from './views/event-details';
import NotFound from './views/404-not-found';

const routes = (
  <Route path="/" component={App}>
    <IndexRoute component={LandingPage} />
    <Route path="login" component={SignUp} />
    <Route path="events" component={EventDisplay} />
    <Route path="create-event" component={CreateEvent} />
    <Route path="event-details" component={EventDetails} />
    <Route path="*" component={NotFound} />
  </Route>
);

export default routes;
