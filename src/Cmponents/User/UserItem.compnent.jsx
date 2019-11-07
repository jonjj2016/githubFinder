import React, { Component } from 'react';
import { Header, Icon, Card, Image, Segment, Container } from 'semantic-ui-react';
import classes from './UserItem.module.css';
class UserItem extends Component {
  render() {
    const style = {
      propfile: {
        margin: '0 auto',
        boxShadow: '1px 2px 15px #999'
        // width: '60%',
        // maxWidth: '600px'
      },
      link: {
        margin: '0 5px'
      },
      image: {
        boxShadow: '3px 4px 5px 2px #999'
      }
    };
    return (
      <Container onClick={this.props.userClickHandler} style={style.container}>
        <Segment
          textAlign='center'
          style={style.propfile}
          className={classes.userItem}
          loading={false}>
          <Image
            style={style.image}
            size='tiny'
            src={this.props.user.avatar_url}
            circular
            wrapped
          />

          <Header as='h3'>{this.props.user.login}</Header>
          <Segment inverted>
            <Icon
              style={{ fontSize: '1.3rem', color: '#999' }}
              color='grey'
              name='github alternate'
            />

            <a style={{ fontSize: '1.3rem', color: '#999' }} href={this.props.user.html_url}>
              More...
            </a>
          </Segment>
        </Segment>
      </Container>
    );
  }
}

export default UserItem;
