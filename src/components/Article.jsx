import React, { Component } from 'react';
import * as api from '../api/api';
import moment from 'moment';
import ArticlePage from './ArticlePage';
import propTypes from 'prop-types';
import { Redirect } from 'react-router-dom'

class Article extends Component {
    state = {
        article: {},
        loading: true,
        error: null
    }
    render() {
        const { title, created_at, created_by, body, comments, votes, _id, error } = this.state.article
        return (
            !this.state.loading ?
                error ? <Redirect to={'/errorpage'} />
                    : <div>
                        <ArticlePage title={title}
                            body={body}
                            created_at={moment(created_at).fromNow()}
                            created_by={created_by.username}
                            avatar={created_by.avatar_url}
                            comments={comments}
                            voteCount={votes}
                            id={_id}
                            user={this.props.user}
                        />
                    </div>
                : <div>loading...</div>
        );
    }

    componentDidMount = () => {
        let articleId = this.props.match.params.article_id
        api.fetchArticle(articleId)
            .then((article) => {
                this.setState({
                    article,
                    loading: false
                })
            }).catch((err) => {
                this.setState({
                    error: err,
                    loading: false
                })
            })
    }

    componentDidUpdate = (prevProps) => {
        let articleId = this.props.match.params.article_id
        if (prevProps !== this.props) {
            api.fetchArticle(articleId)
                .then((article) => {
                    this.setState({
                        article,
                        loading: false
                    })
                }).catch((err) => {
                    this.setState({
                        error: err,
                        loading: false
                    })
                })
        }
    }
}

Article.propTypes = {
    user: propTypes.string
}

export { Article };