import React, { Component } from 'react';
import { Card, Header, Grid } from 'semantic-ui-react';
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
    subHeader: {
      color: '#15AAEA',
      fontSize: 16,
      marginTop: -12,
    },
    cardStats: {
      color: '#15AAEA',
      fontSize: 21,
    },
    subCardStats: {
      color: '#A7B8CA',
      fontSize: 13,
      marginTop: -12,
    },
    eventNumber: {
      color: '#183A5F',
      fontSize: 88,
    },
  },
});

const { card, subHeader, cardText, cardStats, subCardStats, eventNumber } = styles;

export default class SingleEvent extends Component {
  render() {
    return (
      <Card fluid style={card} >
        <Grid>
          <Grid.Row>
            <Grid.Column width={13}>
              <h3 style={cardText}>iOS DESIGN AND DEVELOPMENT</h3>
              <h5 style={subHeader}>AUSTIN, TEXAS</h5>
              <Grid stackable>
                <Grid.Row columns={3}>
                  <Grid.Column>
                    <h3 style={cardStats}>172 000</h3>
                    <h5 style={subCardStats}>SUBSCRIBERS</h5>
                  </Grid.Column>
                  <Grid.Column>
                    <h3 style={cardStats}>45 000</h3>
                    <h5 style={subCardStats}>TICKETS SOLD</h5>
                  </Grid.Column>
                  <Grid.Column>
                    <h3 style={cardStats}>$590</h3>
                    <h5 style={subCardStats}>PRICE</h5>
                  </Grid.Column>
                </Grid.Row>
              </Grid>
            </Grid.Column>
            <Grid.Column width={3}>
              <h3 style={eventNumber}>7</h3>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Card>
    );
  }
}
