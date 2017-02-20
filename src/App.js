import React, { Component } from 'react';
// import SignUp from './views/sign-up';
import CreateEvent from './views/create-event';
import Background from './assets/images/bg_01.jpg';

const styles = {
  mainContainer: {
    backgroundImage: `url(${Background})`,
    width: '100vw',
    height: '100vh',
  },
};

const { mainContainer } = styles;

class App extends Component {
  render() {
    return (
      <div style={mainContainer}>
        <CreateEvent />
      </div>
    );
  }
}

export default App;
