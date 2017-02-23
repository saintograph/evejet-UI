import React, { Component } from 'react';
import { Card, Divider, Label } from 'semantic-ui-react';
import { Map, Marker, Popup, TileLayer } from 'react-leaflet';
import { StyleSheet, css } from 'aphrodite';
import Geosuggest from 'react-geosuggest';
import NavBar from '../components/navbar';
import { slideDownReturn } from 'react-magic';

const styles = StyleSheet.create({
  magic: {
    animationName: slideDownReturn,
    animationDuration: '1s',
  },
});

const position = [51.505, -0.09];

const locationMap = () => {
  return (
    <Map center={position} zoom={16}>
      <TileLayer
        url='http://{s}.tile.stamen.com/toner-lite/{z}/{x}/{y}.png'
        attribution='Map tiles by <a href="http://stamen.com">Stamen Design</a>, <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a> &mdash; Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>'
      />
      <Marker position={position}>
        <Popup>
          <span>Event here!</span>
        </Popup>
      </Marker>
    </Map>
  );
};

class EventDetails extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <div style={styles.cardContainer} className={css(styles.magic)} >
          <div className="row center-xs">
            <div className="col-md-4 col-lg-3">
              <Card fluid style={styles.card}>
                <h1>Location and Guest List</h1>
                <div>
                  {locationMap()}
                </div>
                <Divider />
                <div>
                  <h3>Location</h3>
                  <Geosuggest />
                </div>
                <Divider />
                <div>
                  <h3>Send invites (click to select)</h3>
                  <Label as='a' color='blue' image>
                    <img src='http://semantic-ui.com/images/avatar/small/veronika.jpg' />
                      Veronika
                      <Label.Detail>Friend</Label.Detail>
                  </Label>
                  <Label as='a' color='teal' image>
                    <img src='http://semantic-ui.com/images/avatar/small/jenny.jpg' />
                      Veronika
                    <Label.Detail>Friend</Label.Detail>
                  </Label>
                  <Label as='a' color='yellow' image>
                    <img src='http://semantic-ui.com/images/avatar/small/christian.jpg' />
                      Helen
                    <Label.Detail>Co-worker</Label.Detail>
                  </Label>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default EventDetails;
