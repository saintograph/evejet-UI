import React, { Component } from 'react';
import { Card, Form, TextArea, Divider, Grid } from 'semantic-ui-react';
import reactCSS from 'reactcss';

const styles = reactCSS({
  'default': {
    card: {
      backgroundColor: '#295583',
      padding: 50,
    },
    cardText: {
      fontSize: 14,
      color: '#BDCBD6',
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

export default class Details extends Component{
  render() {
    return (
      <Card fluid style={styles.card} >
        <Card.Content>
          <Card.Header>
            <h3 style={styles.cardText}>DETAILS</h3>
          </Card.Header>
          <Card.Description>
            <Form>
              <Form.Field>
                <label htmlFor="event-selection" style={styles.cardText}>UPLOAD IMAGE</label>
                <TextArea placeholder="Image here" />
              </Form.Field>
              <Divider />
              <Form.Field>
                <label htmlFor="event-selection" style={styles.cardText}>EVENT TITLE</label>
                <TextArea placeholder="Event Title" />
              </Form.Field>
              <Divider />
              <Form.Field>
                <label htmlFor="category-selection" style={styles.cardText}>CATEGORY</label>
                <Form.Select placeholder="FROM" style={styles.dateSelection} id="category-selection" />
              </Form.Field>
              <Divider />
              <label htmlFor="date-selection" style={styles.cardText}>DATE</label>
              <Grid divided="vertically">
                <Grid.Row columns={2}>
                  <Grid.Column>
                    <Form.Field>
                      <Form.Select placeholder="FROM" style={styles.dateSelection} id="date-selection" />
                    </Form.Field>
                  </Grid.Column>
                  <Grid.Column>
                    <Form.Field>
                      <Form.Select placeholder="TO" style={styles.dateSelection} id="date-selection" />
                    </Form.Field>
                  </Grid.Column>
                </Grid.Row>
              </Grid>
            </Form>
            <Divider />
            <Form>
              <h3 style={styles.cardText}>DESCRIPTION</h3>
              <TextArea placeholder="upload" />
            </Form>
          </Card.Description>
        </Card.Content>
      </Card>
    );
  }
}
