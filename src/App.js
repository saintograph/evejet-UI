import React, { Component } from 'react';
import SignUp from './views/sign-up';
import CreateEvent from './views/create-event';
import EventDetails from './views/event-details';
import LandingPage from './views/landing-page';
import EventDisplay from './views/event-display';
import Background from './assets/images/bg_01.jpg';

const styles = {
  containerImage: {
    backgroundImage: `url(${Background})`,
    position: 'fixed',
    top: 0,
    left: 0,
    minWidth: '100%',
    minHeight: '100%',
  },
};

const { containerImage } = styles;

class App extends Component {
  render() {
    return (
      <div style={containerImage}>
        <div>
          <EventDisplay />
        </div>
      </div>
    );
  }
}

export default App;
