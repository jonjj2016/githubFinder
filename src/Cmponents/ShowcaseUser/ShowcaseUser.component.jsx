import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { Container, Image, Grid, Button, Icon, Segment, Header, Loader } from 'semantic-ui-react';
class SowUser extends Component {
  constructor(props) {
    super(props);
    this.state = {
      followers: [],
      repos: [],
      following: [],
      organizations: []
    };
  }
  static defaultProps = {
    user: {
      login: 'mojombo',
      id: 1,
      node_id: 'MDQ6VXNlcjE=',
      avatar_url: 'https://avatars0.githubusercontent.com/u/1?v=4',
      gravatar_id: '',
      url: 'https://api.github.com/users/mojombo',
      html_url: 'https://github.com/mojombo',
      followers_url: 'https://api.github.com/users/mojombo/followers',
      following_url: 'https://api.github.com/users/mojombo/following{/other_user}',
      gists_url: 'https://api.github.com/users/mojombo/gists{/gist_id}',
      starred_url: 'https://api.github.com/users/mojombo/starred{/owner}{/repo}',
      subscriptions_url: 'https://api.github.com/users/mojombo/subscriptions',
      organizations_url: 'https://api.github.com/users/mojombo/orgs',
      repos_url: 'https://api.github.com/users/mojombo/repos',
      events_url: 'https://api.github.com/users/mojombo/events{/privacy}',
      received_events_url: 'https://api.github.com/users/mojombo/received_events',
      type: 'User',
      site_admin: false
    }
  };
  componentDidMount() {
    console.log(this.props.user.followers_url);
    if (this.props.user) {
      fetch(this.props.user.followers_url)
        .then(res => res.json())
        .then(res => this.setState({ followers: res }, () => console.log(this.state)));
      fetch(this.props.user.repos_url)
        .then(res => res.json())
        .then(repos => {
          this.setState({ repos }, () => console.log(this.state));
        });
      fetch(this.props.user.following_url)
        .then(res => res.json())
        .then(res => this.setState({ following: res }, () => console.log(this.state)));
      fetch(this.props.user.organizations)
        .then(res => res.json())
        .then(res => this.setState({ organizations: res }, () => console.log(this.state)));
    }
  }
  // followers: [],
  // repos: [],
  // following: [],
  // organizations: []
  render() {
    const style = {
      btn: {
        margin: '0 1rem'
      }
    };
    console.log(this.props.user, this.state);
    const { avatar_url, html_url } = this.props.user;

    return (
      <Container textAlign='center'>
        <Grid>
          <Grid.Column floated='left' width={5}>
            <Image src={avatar_url} />
          </Grid.Column>
          <Grid.Column floated='right' width={5}>
            <Header as='h4'>User {this.props.user.login}</Header>
            <Segment>
              <Header>
                Followers :{' '}
                {this.state.followers ? (
                  <p>{this.state.followers.length > 0}</p>
                ) : (
                  <Loader active inline />
                )}
              </Header>
              <Header>
                Repos :{' '}
                {this.state.repos ? <p>{this.state.repos.length > 0}</p> : <Loader active inline />}
              </Header>
              <Header>
                Following :{' '}
                {this.state.following.length > 0 ? (
                  this.state.folloing.length
                ) : (
                  <Loader active inline />
                )}
              </Header>
              <Header>
                Organizations :{' '}
                {this.state.organizations ? (
                  <p>{this.state.organizations.length > 0}</p>
                ) : (
                  <Loader active inline />
                )}
              </Header>
            </Segment>
            <Button
              style={style.btn}
              negative
              onClick={() => this.props.history.push('/')}
              animated>
              <Button.Content visible>Go Back</Button.Content>
              <Button.Content hidden>
                <Icon name='arrow left' />
              </Button.Content>
            </Button>
            <Button href={html_url} style={style.btn} positive animated>
              <Button.Content visible>Visit {this.props.user.login}</Button.Content>
              <Button.Content hidden>
                <Icon name='arrow right' />
              </Button.Content>
            </Button>
          </Grid.Column>
        </Grid>
      </Container>
    );
  }
}

export default withRouter(SowUser);
