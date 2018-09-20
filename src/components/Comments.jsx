import React, { Component } from 'react';
import { Vote, RemoveComment, AddComment } from './index'
import * as api from '../api/api';
import moment from 'moment';
import propTypes from 'prop-types';

class Comments extends Component {
    state = {
        comments: []
    }

    render() {
        const { comments } = this.state
        return (
            <div>
                <AddComment id={this.props.article} user={this.props.user} renderComment={this.renderComment} />
                {comments.map((comment) => {
                    //console.log(comment)
                    return (
                        <div key={comment._id}>
                            <h4>{comment.title}</h4>
                            <div>{moment(comment.created_at).fromNow()}</div><br />
                            <div>{comment.created_by.username}</div>
                            <div>{comment.created_by.avatar_url}</div>
                            <div>{comment.body} </div> <br />
                            <Vote voteCount={comment.votes} id={comment._id} origin={"comment"} />
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

    renderComment = (id, newComment) => {
        api.postCommentToArticle(id, newComment)
            .then((addedComment) => {
                this.setState({
                    comments: [...this.state.comments, addedComment.data.addedComment]
                })
            })
    }
}
export { Comments };

Comments.propTypes = {
    article: propTypes.string.isRequired,
    user: propTypes.string
}