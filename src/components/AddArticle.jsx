import React, { Component } from 'react';
import { withStyles } from '@material-ui/core';
import TitleField from './AddArticleComponents/TitleField'
import TopicSelect from './AddArticleComponents/TopicSelect'
import SubmitButton from './AddArticleComponents/SubmitButton'
import ArticleField from './AddArticleComponents/ArticleField'
import propTypes from 'prop-types';
import * as api from '../api/api'

const styles = () => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    margin: '1% 10%'
  },
  button: {
    display: 'block'
  }
});

class AddArticle extends Component {
  state = {
    title: '',
    articleBody: '',
    topic: '',
  };

  render() {
    const { classes } = this.props;
    return (
      <section className={classes.root}>
        <form className={classes.container} noValidate autoComplete="off">
          <TitleField handleChange={this.handleChange} />
          <TopicSelect handleChange={this.handleChange} selected={this.state.topic} />
          <ArticleField handleChange={this.handleChange} />
          <SubmitButton handleSubmit={this.handleSubmit} />

        </form>
      </section>

    );
  }

  handleChange = name => event => {
    this.setState({
      [name]: event.target.value,
    });
  };

  handleSubmit = (event) => {
    const {title, articleBody, topic} = this.state
    const newArticle = {
      title: title,
      body: articleBody,
      created_by: this.props.user
    }
    api.postArticle(topic, newArticle)
  }

}

AddArticle.propTypes ={ 
  user: propTypes.string.isRequired
}

export default withStyles(styles)(AddArticle);