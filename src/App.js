import React, { Component } from 'react';
import SignUp from './views/sign-up';
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
        <SignUp />
      </div>
    );
  }
}

export default App;
