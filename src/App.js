import React, { Component } from 'react';
import SignUp from './views/sign-up';
import CreateEvent from './views/create-event';
import EventDetails from './views/event-details';
import Background from './assets/images/bg_01.jpg';

const styles = {
  mainContainer: {
    backgroundColor: '#26517e',
  },
  containerImage: {
    backgroundImage: `url(${Background})`,
    position: 'fixed',
    top: 0,
    left: 0,
    minWidth: '100%',
    minHeight: '100%',
  },
};

const { mainContainer, containerImage } = styles;

class App extends Component {
  render() {
    return (
      <div style={mainContainer}>
        <img src={Background} style={containerImage} alt="background-dark-forests" />
        <EventDetails />
      </div>
    );
  }
}

export default App;
