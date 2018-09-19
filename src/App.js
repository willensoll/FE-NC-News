import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import {Articles, Article, NavBar} from './components/index'

class App extends Component {
  render() {
    return (
     <div>
       <NavBar />
       <Route exact path="/" component={Articles} />
       <Route exact path="/articles" component={Articles} />
       <Route path="/topics/:topic_id" component={Articles} />
       <Route path="/articles/:article_id" component={Article} />

     </div>
    );
  }
}

export default App;
