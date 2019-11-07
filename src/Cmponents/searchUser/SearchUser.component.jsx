import React, { Component } from 'react';
import { Input, Container } from 'semantic-ui-react';

export class SearchUser extends Component {
  render() {
    const style = {
      container: {
        margin: '2rem auto'
      },
      input: {
        width: '50%',
        maxWidth: '400px'
      }
    };
    return (
      <Container style={style.container} textAlign='center'>
        <Input
          size='huge'
          style={style.input}
          loading={false}
          icon='user'
          placeholder='Search...'
        />
      </Container>
    );
  }
}

export default SearchUser;
