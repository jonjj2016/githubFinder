import React, { Component } from 'react';
import SearchUser from '../searchUser/SearchUser.component';
import { Grid, Image, Container, Segment, Loader, Dimmer } from 'semantic-ui-react';
import UserItem from '../User/UserItem.compnent';
export class Users extends Component {
  render() {
    let output;
    if (this.props.users.length > 0) {
      output = (
        <Grid columns={3} divided stackable doubling>
          {this.props.users.map(user => (
            <Grid.Column key={user.id}>
              <UserItem userClickHandler={() => this.props.userClickHandler(user.id)} user={user} />
            </Grid.Column>
          ))}
        </Grid>
      );
    } else {
      output = (
        <Segment>
          <Dimmer active inverted>
            <Loader inverted content='Loading' />
          </Dimmer>

          <Image src='https://maxcdn.icons8.com/Share/icon/nolan/logos/github1600.png' />
        </Segment>
      );
    }
    return (
      <Container>
        <SearchUser />
        {output}
      </Container>
    );
  }
}

export default Users;
