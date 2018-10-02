import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import { Article, Articles, ErrorPage } from './components/index'
import AddArticle from './components/AddArticle'
import NavBar from './components/NavBar'

class App extends Component {
  state = {
    activeUser: 'cooljmessy',
    filterVal: null
  }
  render() {
    const { activeUser } = this.state
    return (
      <div>
        <NavBar />
        <Switch>
          <Route exact path="/" render={({ match }) => <Articles match={match} user={activeUser} />} />
          <Route exact path="/articles" render={({ match }) => <Articles match={match} user={activeUser} />} />
          <Route path="/topics/:topic_id" render={({ match }) => <Articles match={match} user={activeUser} />} />
          <Route exact path="/articles/add_article" render={({ match }) => <AddArticle match={match} user={activeUser} />} />
          <Route exact path="/articles/:article_id" render={({ match }) => <Article match={match} user={activeUser} />} />
          <Route path="/errorpage" component={ErrorPage} />
          <Route component={ErrorPage} />
        </Switch>
      </div>
    );
  }
}

export default App;
