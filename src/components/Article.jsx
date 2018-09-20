import React, { Component } from 'react';
import * as api from '../api/api';
import moment from 'moment';
import { Comments, Vote } from './index';
import propTypes from 'prop-types';

class Article extends Component {
    state = {
        article: {},
        loading: true
    }
    render() {
        const { title, created_at, created_by, body, comments, votes, _id } = this.state.article
        return (
            !this.state.loading ?
                <div>
                    <h4>{title}</h4>
                    <div>{moment(created_at).fromNow()}</div><br />
                    <div>{created_by.username}</div>
                    <div>{created_by.avatar_url}</div>
                    <div>{body} </div> <br />
                    <div>Comments: {comments}</div>
                    <Vote voteCount={votes} id={_id} origin={"article"}/>
                    <h2>Comments</h2>
                    <Comments article={_id} user={this.props.user} />
                </div>
                : null //spinner here soon?!
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
                })
        }
    }



}

Article.propTypes = {
    user: propTypes.string
}

export { Article };