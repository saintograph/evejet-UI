import React, { Component } from 'react';
import { Card, Menu, Segment, Divider, Form, TextArea } from 'semantic-ui-react';
import reactCSS from 'reactcss';
import Dropzone from 'react-dropzone';
import NavBar from '../components/navbar';
import UploadIcon from '../assets/images/upload.png';

const styles = reactCSS({
  'default': {
    cardContainer: {
      // paddingTop: '5vh',
      paddingBottom: '15vh',
    },
    card: {
      backgroundColor: '#ffffff',
      paddingTop: 25,
      alignText: 'center',
      borderRadius: 10,
      maxWidth: 350,
    },
    tabStyle: {
      color: '#12aeef',
      border: 'none',
    },
    uploadBox: {
      fontWeight: 700,
      color: '#e3e7eb',
      borderColor: '#e3e7eb'
    },
    uploadBoxStyle: {
      height: '250px',
      backgroundImage: `url(${UploadIcon})`,
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center',
      textAlign: 'center'
    },
    dividerStyle: {
      marginLeft: 25,
      marginRight: 25,
      borderTop: '2px dotted #e3e7eb',
    },
    formLabels: {
      float: 'left',
      color: '#A0B7CB',
      fontWeight: 700,
      marginLeft: 10,
      marginBottom: 10,
    },
    dateLabels: {
      textAlign: 'left',
      color: '#A0B7CB',
      fontWeight: 700,
      marginLeft: 10,
      marginBottom: 10,
    },
    formInput: {
      backgroundColor: '#597a96',
      color: '#ffffff',
      fontWeight: 700,
    },
  },
});

const {
  tabStyle,
  uploadBox,
  uploadBoxStyle,
  dividerStyle,
  formLabels,
  formInput,
  dateLabels 
} = styles;

class CreateEvent extends Component {
  onDrop() {
    console.log('working!');
  }

  render() {
    return (
      <div>
        <NavBar />
        <div style={styles.cardContainer}>
          <div className="row center-xs">
            <div className="col-md-4 col-lg-3">
              <Card fluid style={styles.card}>
                <h1>New Event</h1>
                <Divider style={styles.dividerStyle} />
                <div className="row center-xs" style={uploadBox}>
                  <Dropzone onDrop={this.onDrop.bind(this)} style={uploadBoxStyle} className="col-xs-12">
                    <div style={{ marginTop: '155px' }}>UPLOAD IMAGE</div>
                  </Dropzone>
                </div>
                <Divider style={styles.dividerStyle} />
                <div className="col-xs-12">
                  <Form>
                    <Form.Group widths="equal">
                      <Form.Field style={{ marginLeft: 25, marginRight: 25 }}>
                        <label style={formLabels}>EVENT TITLE<span style={{ color: '#12aeef' }}> *</span></label>
                        <input type="text" placeholder="DESIGN WORKSHOP" style={formInput} />
                      </Form.Field>
                    </Form.Group>
                  </Form>
                </div>
                <Divider style={styles.dividerStyle} />
                <div className="col-xs-12">
                  <Form>
                    <Form.Group widths="equal">
                      <Form.Field style={{ marginLeft: 25, marginRight: 25 }}>
                        <label style={formLabels}>CATEGORY<span style={{ color: '#12aeef' }}> *</span></label>
                        <select style={formInput}>
                          <option value="volvo">DESIGN</option>
                          <option value="saab">Saab</option>
                          <option value="mercedes">Mercedes</option>
                          <option value="audi">Audi</option>
                        </select>
                      </Form.Field>
                    </Form.Group>
                  </Form>
                </div>
                <Divider style={styles.dividerStyle} />
                <div className='col-xs-12'>
                    <Form>
                      <Form.Group widths='equal'>
                        <Form.Field style={{marginLeft: 25, marginRight: 25}}>
                          <label style={dateLabels}>DATE<span style={{color: '#12aeef'}}> *</span></label>
                          <div className="row">
                            <div className="col-xs-6">
                              <select style={formInput}>
                                <option value="volvo">FROM</option>
                              </select>
                            </div>
                            <div className="col-xs-6">
                              <select style={formInput}>
                                <option value="volvo">TO</option>
                              </select>
                            </div>
                          </div>
                        </Form.Field>
                      </Form.Group>
                    </Form>
                </div>
                <Divider style={styles.dividerStyle} />
                <div className='col-xs-12'>
                  <Form style={{marginLeft: 25, marginRight: 25}}>
                    <label style={formLabels}>DESCRIPTION<span style={{color: '#12aeef'}}> *</span></label>
                    <TextArea placeholder='Tell your guests more' style={{marginBottom: '25px'}}/>
                  </Form>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default CreateEvent;
