import React from 'react';
import { Menu } from 'semantic-ui-react';
import reactCSS from 'reactcss';

const styles = reactCSS({
  'default': {
    menuStyles: {
      backgroundColor: 'rgba(0, 0, 0, 0)',
      border: 'none',
      boxShadow: 'none',
    },
  },
});

const NavBar = () => {
  return (
    <Menu style={styles.menuStyles}>
      <Menu.Item name='home' style={{ color: '#ffffff' }} />
    </Menu>
  );
};

export default NavBar;
