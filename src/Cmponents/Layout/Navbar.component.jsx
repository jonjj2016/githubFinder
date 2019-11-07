import React, { Component } from 'react';
import PropTypes from 'prop-types';
//impt
import { Menu, Icon, Container } from 'semantic-ui-react';
class Navbar extends Component {
  static defaultProps = {
    icon: 'github',
    title: 'GitHub Finder',
    btnText: 'Sign Up',
    handleLogIn() {
      console.log('Logged in');
    }
  };
  static propTypes = {
    title: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired,
    btnText: PropTypes.string.isRequired,
    handleLogIn: PropTypes.func.isRequired
  };
  render() {
    const style = {
      menu: {
        background: '#24292E',
        height: '4rem',
        fontSize: '1.2rem'
      },
      icon: {
        color: '#fff',
        fontSize: '2rem'
      },
      color: {
        color: '#fff'
      }
    };
    return (
      <Menu style={style.menu}>
        <Container>
          <Menu.Item>
            <Icon style={style.icon} name={this.props.icon} />
          </Menu.Item>
          <Menu.Item style={style.color}>{this.props.title}</Menu.Item>
          <Menu.Menu position='right'>
            <Menu.Item style={style.color} onClick={this.props.handleLogIn}>
              {this.props.btnText}
            </Menu.Item>
          </Menu.Menu>
        </Container>
      </Menu>
    );
  }
}

export default Navbar;
