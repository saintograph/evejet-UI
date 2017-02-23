import React from 'react';
import { Menu, Button, Input } from 'semantic-ui-react';
import { StyleSheet, css } from 'aphrodite';

const styles = StyleSheet.create({
  menuItems: {
    color: '#ffffff',
    fontSize: 20,
    fontWeight: 700,
  },
  registerButton: {
    color: '#ffffff',
    fontSize: 14,
    fontWeight: 700,
    backgroundColor: '#12aeef',
  },
  blurbContainer: {
    height: '30vh',
    marginTop: 60,
    padding: 0,
  },
  blurb: {
    position: 'relative',
    top: '50%',
    transform: 'translateY(-50%)',
    color: '#ffffff',
    textAlign: 'left',
    fontSize: 48,
  },
  registerCTA: {
    float: 'left',
  },
});

const { menuItems, registerButton, blurb, blurbContainer, registerCTA } = styles;

const landingPage = () => {
  return (
    <div style={{ marginTop: 12 }}>
      <Menu secondary>
        <Menu.Item className={css(menuItems)}>EVEJET</Menu.Item>
        <Menu.Menu position="right">
          <Menu.Item >
            <Button className={css(registerButton)}>REGISTER / LOGIN</Button>
          </Menu.Item>
        </Menu.Menu>
      </Menu>
      <div className="row center-xs">
        <div className="col-md-8">
          <div className={css(blurbContainer)}>
            <h1 className={css(blurb)}>The easiest way to organize your meetings. <br />Period.</h1>
          </div>
          <div className={css(registerCTA)}>
            <Input type="text" placeholder="Enter your email" action>
              <input />
              <Button type="submit" positive>REGISTER</Button>
            </Input>
          </div>
        </div>
      </div>
    </div>
  );
};

export default landingPage;
