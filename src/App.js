import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import { Article, Articles } from './components/index'
import NavBar from './components/NavBar'

class App extends Component {
  state = {
    activeUser: 'cooljmessy'
  }
  render() {
    return (
      <div>
        <NavBar />
        <Route exact path="/" render={({match}) => <Articles match={match} user={this.state.activeUser} />} />
        <Route exact path="/articles" render={({ match }) => <Articles match={match} user={this.state.activeUser}  />} />
        <Route path="/topics/:topic_id" render={({ match }) => <Articles match={match} user={this.state.activeUser} />} />
        <Route path="/articles/:article_id" render={({ match }) => <Article match={match} user={this.state.activeUser} />} />

      </div>
    );
  }
}

export default App;
