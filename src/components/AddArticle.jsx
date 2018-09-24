import React, { Component } from 'react';
import { withStyles, TextField } from '@material-ui/core';
import TitleField from './AddArticleComponents/TitleField'
import TopicSelect from './AddArticleComponents/TopicSelect'
import ArticleField from './AddArticleComponents/ArticleField'
import propTypes from 'prop-types';

const styles = () => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    margin: '1% 10%'
  },
});

class AddArticle extends Component {
  state = {
    title: '',
    articleBody: '',
    topic: '',
  };

  render() {
    const { classes, user } = this.props;
    return (
      <section className={classes.root}>
        <form className={classes.container} noValidate autoComplete="off">
          <TitleField handleChange={this.handleChange} />
          <TopicSelect handleChange={this.handleChange} selected={this.state.topic} />
          <ArticleField handleChange={this.handleChange} />
        </form>
      </section>

    );
  }

  handleChange = name => event => {
    this.setState({
      [name]: event.target.value,
    }, () => {
      console.log(this.state)
    });
  };

}

AddArticle.propTypes ={ 
  user: propTypes.string.isRequired
}

export default withStyles(styles)(AddArticle);