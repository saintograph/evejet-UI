import React, { Component } from 'react';
import SignUp from './views/sign-up';
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
          {this.props.children}
        </div>
      </div>
    );
  }
}

export default App;
