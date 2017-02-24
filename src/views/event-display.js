import React, { Component } from 'react';
import { Card, Button } from 'semantic-ui-react';
import Timeline from 'react-dual-timeline';
import { StyleRoot } from 'radium';
import NavBar from '../components/navbar';
import Point from '../assets/images/circle.png';

const style = {
  itemContainer: {
    color: '#ffffff',
    textAlign: 'left',
  },
  titleCard: {
    width: 60,
    backgroundColor: '#12aeef',
    padding: 5,
    textAlign: 'center',
    boxShadow: 'none',
    color: '#ffffff',
    fontWeight: 700,
  },
  time: {
    color: '#ffffff',
    fontWeight: 700,
    fontSize: 12,
  },
  itemConfirmation: {
    color: '#12aeef',
    margin: 0,
    padding: 0,
    fontSize: 12,
  },
  itemHeader: {
    color: '#ffffff',
    fontWeight: 700,
    fontSize: 21,
    marginTop: 0,
    paddingTop: 15,
    marginBottom: 5,
  },
  itemDescription: {
    color: '#597a96',
    fontSize: 14,
    fontWeight: 700,
  },
  statCard: {
    backgroundColor: '#26517e',
    borderRadius: 10,
    border: 'none',
    boxShadow: 'none',
  },
  pointIcon: {
    height: 12,
    width: 12,
  },
};

const { itemContainer, time, itemHeader, itemDescription, itemConfirmation, statCard, pointIcon, titleCard } = style;
const point = <img src={Point} style={pointIcon} alt="point-icon" />;

class EventDisplay extends Component {
  render() {
    return (
      <div style={{ padding: 15 }}>
        <NavBar />
        <div className="row center-md">
          <Card style={titleCard}>Today</Card>
        </div>
        <StyleRoot>
          <Timeline activeColor="rgba(15, 31, 50, 0.5)" lineColor="rgba(15, 31, 50, 0.5)">
            <div style={itemContainer} icon={point}>
              <span style={time}>7:51 PM</span>
              <h5 style={itemConfirmation}>NEW EVENT POSTED</h5>
              <h3 style={itemHeader}>THE BEST EVER TITLE</h3>
              <p style={itemDescription}>Lorem Ipsum is simply dummy text of the printing and 
                typesetting industry.
                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
              </p>
              <Card
                style={statCard}
                header='Rick Sanchez'
                meta='Scientist'
                description={[
                  'Rick is a genius scientist whose alcoholism and reckless,',
                  ' nihilistic behavior are a source of concern for his family',
                ].join('')}
              />
            </div>
            <div style={itemContainer} icon={point}>
              <span style={time}>7:51 PM</span>
              <h5 style={itemConfirmation}>NEW EVENT POSTED</h5>
              <h3 style={itemHeader}>THE BEST EVER TITLE</h3>
              <p style={itemDescription}>Lorem Ipsum is simply dummy text of the printing and 
                typesetting industry.
                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
              </p>
              <Card
                style={statCard}
                header='Rick Sanchez'
                meta='Scientist'
                description={[
                  'Rick is a genius scientist whose alcoholism and reckless,',
                  ' nihilistic behavior are a source of concern for his family',
                ].join('')}
              />
            </div>
          </Timeline>
        </StyleRoot>
      </div>
    );
  }
}

export default EventDisplay;
