import React, { Component } from 'react';
import { Card, Menu, Segment, Divider, Form, TextArea } from 'semantic-ui-react';
import reactCSS from 'reactcss';
import NavBar from '../components/navbar';

const styles = reactCSS({
  'default': {},
});

class EventDetails extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <div style={styles.cardContainer}>
          <div className="row center-xs">
            <div className="col-md-4 col-lg-3">
              <Card fluid style={styles.card}>
                <h1>Test</h1>
              </Card>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default EventDetails;
