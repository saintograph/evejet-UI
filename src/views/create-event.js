import React, { Component } from 'react';
import { Card, Menu, Segment, Divider, Form } from 'semantic-ui-react';
import reactCSS from 'reactcss';
import Dropzone from 'react-dropzone';
import NavBar from '../components/navbar';
import UploadIcon from '../assets/images/upload.png';

const styles = reactCSS({
  'default': {
    cardContainer: {
      paddingTop: '5vh',
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
    formInput: {
      backgroundColor: '#597a96',
      color: '#ffffff',
      fontWeight: 700,
    },
  },
});

const { tabStyle, uploadBox,uploadBoxStyle, dividerStyle, formLabels, formInput } = styles;

class CreateEvent extends Component {
  state = { activeItem: 'bio' }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  onDrop = () => {
    console.log('got it!')
  }

  render() {
    const { activeItem } = this.state;
    return (
      <div>
        <NavBar />
        <div style={styles.cardContainer}>
          <div className="row center-xs">
            <div className="col-md-4 col-lg-3">
              <Card fluid style={styles.card}>
                <Divider style={styles.dividerStyle} />
                <div className='row center-xs' style={uploadBox}>
                  <Dropzone onDrop={this.onDrop} style={uploadBoxStyle} className="col-xs-12">
                    <div style={{marginTop: '155px'}}>UPLOAD IMAGE</div>
                  </Dropzone>
                 </div>
                <Divider style={styles.dividerStyle} />
                <div className='col-xs-12'>
                    <Form>
                      <Form.Group widths='equal'>
                        <Form.Field style={{marginLeft: 25, marginRight: 25}}>
                          <label style={formLabels}>EVENT TITLE<span style={{color: '#12aeef'}}> *</span></label>
                          <input type="text" placeholder="DESIGN WORKSHOP" style={formInput}/>
                        </Form.Field>
                      </Form.Group>
                    </Form>
                </div>
                <Divider style={styles.dividerStyle} />
                <div className='col-xs-12'>
                    <Form>
                      <Form.Group widths='equal'>
                        <Form.Field style={{marginLeft: 25, marginRight: 25}}>
                          <label style={formLabels}>CATEGORY<span style={{color: '#12aeef'}}> *</span></label>
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
                          <label style={formLabels}>DATE<span style={{color: '#12aeef'}}> *</span></label>
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
              </Card>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default CreateEvent;
