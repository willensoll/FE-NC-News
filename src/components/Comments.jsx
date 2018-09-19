import React, { Component } from 'react';
import {Vote, RemoveComment} from './index'
import * as api from '../api/api';
import moment from 'moment';

class Comments extends Component {
    state = { 
        comments: []
     }
    
    render() { 
        const { comments } = this.state
        return ( 
            <div>
            {comments.map((comment)  => {
                // console.log(comment)
                return (
                    <div key={comment._id}>
                        <h4>{comment.title}</h4>
                        <div>{moment(comment.created_at).fromNow()}</div><br />
                        <div>{comment.created_by.username}</div>
                        <div>{comment.created_by.avatar_url}</div>
                        <div>{comment.body} </div> <br />
                        <div>Comments: {comment.comments}</div>
                        <Vote voteCount={comment.votes}/>
                        <RemoveComment />
                    </div>
                )
        })
    }
        </div>
         );
    }
    
    componentDidMount = () => {
        let articleId = this.props.article
        api.fetchComments(articleId)
        .then((comments) => {
            this.setState({
                comments
            })
        })
    }

    componentDidUpdate = (prevProps) => {
        let articleId = this.props.article
        if (prevProps !== this.props) {
            api.fetchComments(articleId)
            .then((comments) => {
                this.setState({
                    comments
                })
            })
        }
    }
}
export {Comments};