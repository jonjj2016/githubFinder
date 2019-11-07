import React from 'react';
import { Route, Switch, withRouter } from 'react-router-dom';
import ShowCaseUser from './Cmponents/ShowcaseUser/ShowcaseUser.component';
import NavBar from './Cmponents/Layout/Navbar.component';
import Users from './Cmponents/Users/Users.component';
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [
        {
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
      ],
      selectedUser: {}
    };
  }
  componentDidMount() {
    fetch('https://api.github.com/users')
      .then(res => res.json())
      .then(res => this.setState({ users: res }))
      .catch(err => console.log('Error', err));
  }
  onUserClickHandler = id => {
    let selectedUser = this.state.users.find(user => user.id === id);
    this.props.history.push('/user');
    this.setState({ selectedUser });
  };
  render() {
    const style = {
      container: {
        backgroundColor: '#F6F8FA'
      }
    };
    console.log(this.state);
    return (
      <div style={style.container}>
        <NavBar />

        <Switch>
          <Route path='/user' component={() => <ShowCaseUser user={this.state.selectedUser} />} />
          <Route
            exact
            path='/'
            component={() => (
              <Users userClickHandler={this.onUserClickHandler} users={this.state.users} />
            )}
          />
        </Switch>
      </div>
    );
  }
}
export default withRouter(App);
