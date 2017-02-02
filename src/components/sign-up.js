import React, { Component } from 'react';
import { Card, Form, Checkbox, Button, Grid } from 'semantic-ui-react';
import reactCSS from 'reactcss';

const styles = reactCSS({
  'default': {
    card: {
      backgroundColor: '#295583',
      paddingTop: 25,
    },
    headerText: {
      fontSize: 16,
      color: '#16AAE9',
      margin: 0,
    },
    subHeaderText: {
      fontSize: 16,
      color: '#FFFFFC',
      margin: 0,
    },
    form: {
      marginTop: 50,
      marginRight: 100,
      marginBottom: 50,
      marginLeft: 100,
    },
    formInput: {
      marginTop: 15,
    },
  },
});

export default class SignUp extends Component {
  render() {
    return (
      <div>
        <Card fluid style={styles.card}>
          <Grid centered>
            <Grid.Column>
              <h3 style={styles.headerText}>SIGN UP</h3>
              <h3 style={styles.subHeaderText}>CREATE YOUR ACCOUNT</h3>
              <Form style={styles.form}>
                <Form.Field>
                  <input placeholder='FIRST NAME' />
                  <input placeholder='EMAIL' style={styles.formInput} />
                  <input placeholder='PASSWORD' style={styles.formInput} />
                  <input placeholder='CONFIRM PASSWORD' style={styles.formInput} />
                </Form.Field>
              </Form>
              <Form.Field>
                <Checkbox label='I agree to the Terms and Conditions' />
              </Form.Field>
              <Button type="submit">SIGN UP</Button>
            </Grid.Column>
          </Grid>
        </Card>
      </div>
    );
  }
}
