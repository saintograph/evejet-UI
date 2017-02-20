import React, { Component } from 'react';
import { Card, Menu, Segment } from 'semantic-ui-react';
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
    tabStyle: {
      color: '#12aeef',
      border: 'none',
    }
  },
});

const { tabStyle } = styles;

class CreateEvent extends Component {
  state = { activeItem: 'bio' }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state;
    return (
      <div>
        <NavBar />
        <div style={styles.cardContainer}>
          <div className="row center-xs">
            <div className="col-md-4 col-lg-3">
              <Card fluid style={styles.card}>
                <Menu tabular fluid widths={2}>
                  <Menu.Item name='details' active={activeItem === 'bio'} onClick={this.handleItemClick} style={tabStyle}/>
                  <Menu.Item name='preview' active={activeItem === 'photos'} onClick={this.handleItemClick} style={tabStyle}/>
                </Menu>
                <Segment attached='bottom'>
                  <div style={{height: 300}}></div>
                </Segment>
              </Card>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default CreateEvent;
