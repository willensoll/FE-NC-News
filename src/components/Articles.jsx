import React, { Component } from 'react';
import * as api from '../api/api';
import moment from 'moment';
import ArticlePanel from './ArticlePanel';
import propTypes from 'prop-types';

class Articles extends Component {
    state = {
        articles: [],
        loading: true

    }

    render() {
        const { articles, loading } = this.state
        return (
            !loading ?
                <div>
                    {articles.map((article => {
                        return (
                            <div key={article._id}>
                                <ArticlePanel
                                    title={article.title}
                                    created_at={moment(article.created_at).fromNow()}
                                    created_by={article.created_by.username}
                                    avatar={article.created_by.avatar_url}
                                    body={article.body}
                                    comments={article.comments}
                                    voteCount={article.votes}
                                    id={article._id}
                                    user={this.props.user}
                                />
                            </div>
                        )
                    })
                    )}
                </div>
                : <div>loading...</div>

        )
    }

    componentDidMount = () => {
        let param = this.props.match.params.topic_id
        api.fetchArticles(param)
            .then((articles) => {
                this.setState({
                    articles,
                    loading: false
                })
            })
    }

    componentDidUpdate = (prevProps) => {
        if (prevProps !== this.props) {
            let param = this.props.match.params.topic_id
            api.fetchArticles(param)
                .then((articles) => {
                    this.setState({
                        articles,
                        loading: false
                    })
                })
        }
    }
}

export { Articles };

Articles.propTypes = {
    user: propTypes.string
}