import React, { Component } from 'react';
import { Card } from 'semantic-ui-react';
import reactCSS from 'reactcss';

const styles = reactCSS({
  'default': {
    card: {
      backgroundColor: '#295583',
      padding: 50,
    },
    cardText: {
      fontSize: 21,
      color: '#FFFFFF',
    },
    dateSelection: {
      backgroundColor: '#5681B0',
    },
    dateText: {
      fontSize: 14,
      color: '#BDCBD6',
    },
  },
});

export default class SingleEvent extends Component {
  render() {
    return (
      <Card fluid style={styles.card} >
        <h1 style={styles.cardText}>iOS DESIGN AND DEVELOPMENT</h1>
      </Card>
    );
  }
}
