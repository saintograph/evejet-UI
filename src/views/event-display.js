import React, { Component } from 'react';
import { Card } from 'semantic-ui-react';
import Timeline from 'react-dual-timeline';
import { StyleRoot } from 'radium';
import NavBar from '../components/navbar';

const style = {
  itemContainer: {
    color: '#ffffff',
    textAlign: 'left',
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
  },
  itemHeader: {
    color: '#ffffff',
    fontWeight: 700,
    fontSize: 21,
    marginTop: 0,
    paddingTop: 0,
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
};

const { itemContainer, time, itemHeader, itemDescription, itemConfirmation, statCard } = style;

class EventDisplay extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <StyleRoot>
          <Timeline activeColor="rgba(0, 0, 0, 0)" lineColor="#0F1F32" paddingToItem={10}>
            <div icon='a' style={itemContainer}>
              <h1>Entry 1</h1>
            </div>
            <div style={itemContainer}>
              <span style={time}>7:51 PM</span>
              <h5 style={itemConfirmation}>NEW EVENT POSTED</h5>
              <h3 style={itemHeader}>THE BEST EVER TITLE</h3>
              <p style={itemDescription}>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
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
