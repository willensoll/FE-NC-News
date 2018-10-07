import React, { Component } from 'react';
import * as api from '../apiUtils/api';
import moment from 'moment';
import ArticlePanel from './PanelComponents/ArticlePanel';
import propTypes from 'prop-types';
import { Redirect } from 'react-router-dom';
import LoadingBar from './LoadingBar';
import SortSelection from './SortSelection';
import sort from '../apiUtils/sortFunc'

class Articles extends Component {
    state = {
        articles: [],
        loading: true,
        error: null,
        sort: 'new'
    }

    render() {
        const { articles, loading, error } = this.state
        return (
            <React.Fragment>
            <SortSelection handleSort={this.handleSort} value={this.state.sort} />
            {!loading ?
                error ? <Redirect to={'/errorpage'} />
                    : <div>           
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
                : <div><LoadingBar /></div>}
                </React.Fragment>

        )
    }

    componentDidMount = () => {
        let param = this.props.match.params.topic_id
        api.fetchArticles(param)
            .then((articles) => {
                this.setState({
                    articles: sort(articles, this.state.filter),
                    loading: false
                })
            }, (error) => {
                this.setState({
                    error: error,
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
                        articles: sort(articles, this.state.filter),
                        loading: false
                    })
                }, (error) => {
                    this.setState({
                        error: error,
                        loading: false
                    })
                })
        }
    }

    handleSort = (sortVal) => {
        this.setState({
            articles: sort(this.state.articles, sortVal),
            sort: sortVal
        })
    }
}

export { Articles };

Articles.propTypes = {
    user: propTypes.string.isRequired
}