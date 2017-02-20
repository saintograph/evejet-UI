import React, { Component } from 'react';
import { Card, Form, Checkbox, Button, Divider } from 'semantic-ui-react';
import reactCSS from 'reactcss';
import NavBar from '../components/navbar';

const styles = reactCSS({
  'default': {
    cardContainer: {
      paddingTop: '10vh',
    },
    card: {
      backgroundColor: '#ffffff',
      paddingTop: 25,
      alignText: 'center',
      borderRadius: 10,
      maxWidth: 350,
    },
    headerText: {
      fontSize: '1.1em',
      color: '#16AAE9',
      margin: 0,
    },
    subHeaderText: {
      fontSize: '0.8em',
      color: '#597a96',
      margin: 0,
    },
    dividerStyle: {
      marginLeft: 15,
      marginRight: 15,
      borderTop: '1px dotted #e3e7eb',
    },
    form: {
      marginRight: 50,
      marginBottom: 50,
      marginLeft: 50,
    },
    formInput: {
      marginTop: 15,
      backgroundColor: '#e3e7eb',
      border: 'none',
      fontWeight: 700,
      fontSize: 12,
    },
    checkBox: {
      fontSize: 11,
      marginTop: 25,
    },
    signUpButton: {
      backgroundColor: '#12aeef',
      color: '#ffffff',
      minWidth: '25vh',
      minHeight: '35px',
      fontSize: 12,
      marginBottom: 40,
      borderRadius: 0,
    },
  },
});

export default class SignUp extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <div style={styles.cardContainer}>
          <div className="row center-xs">
            <div className="col-md-4 col-lg-3">
              <Card fluid style={styles.card}>
                <div className="row center-xs">
                  <div className="col-xs-6">
                    <h3 style={styles.headerText}>SIGN UP</h3>
                    <h3 style={styles.subHeaderText}>CREATE YOUR ACCOUNT</h3>
                  </div>
                </div>
                <Divider style={styles.dividerStyle} />
                <Form style={styles.form}>
                  <Form.Field>
                    <input placeholder="FIRST NAME" style={styles.formInput} />
                    <input placeholder="EMAIL" style={styles.formInput} />
                    <input placeholder="PASSWORD" style={styles.formInput} />
                    <input placeholder="CONFIRM PASSWORD" style={styles.formInput} />
                    <Checkbox label="SIGN ME UP FOR THE NEWSLETTER" style={styles.checkBox} />
                  </Form.Field>
                </Form>
                <div className="row center-xs">
                  <Button type="submit" style={styles.signUpButton}>SIGN UP</Button>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
