import React, { Component } from 'react';
import * as api from '../api/api';
import moment from 'moment';
import {Comments, Vote, AddComment} from './index';

class Articles extends Component {
    state = { 
        articles: [],
        loading: true

    }
    render() {
        const { articles } = this.state

        return (
            !this.state.loading ? 
            <div><h2>Articles</h2>
                {articles.map((article)  => {
                    return (
                        <div key={article._id}>
                            <h4>{article.title}</h4>
                            <div>{moment(article.created_at).fromNow()}</div><br />
                            <div>{article.created_by.username}</div>
                            <div>{article.created_by.avatar_url}</div>
                            <div>{article.body} </div> <br />
                            <div>Comments: {article.comments}</div>
                            {<Vote voteCount={article.votes} id={article._id} origin={"article"}/>}
                            <AddComment user={this.props.activeUser} id={article._id} />
                            <h2>Comments</h2>
                            <Comments article={article._id} user={this.props.activeUser}/>
                        </div>
                        
                    )
            })
        }
            </div>
                : null //spinner here
         );
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
 
export {Articles};