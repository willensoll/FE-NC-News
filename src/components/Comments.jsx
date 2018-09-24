import React, { Component } from 'react';
import ApplyComment from './ApplyComment'
import CommentsPanel from './PanelComponents/CommentsPanel'
import Vote from './Vote.jsx'
import * as api from '../api/api';
import moment from 'moment';
import propTypes from 'prop-types';
import CommentIcon from '@material-ui/icons/Comment'

import {
    withStyles, ExpansionPanel, ExpansionPanelSummary,
    Button,

} from '@material-ui/core';

const styles = (theme) => ({
    root: {
        width: '100%',
        backgroundColor: '#ecf0f1',
        border: 'solid 1px white',
    },
    column: {
        flexBasis: '43.33%'
    },
    button: {
        marginTop: "0.5rem"
    },
});

class Comments extends Component {
    state = {
        comments: [],
        deletedComments: [],
        expansionPanelOpen: false
    }

    render() {
        const { classes, user } = this.props
        const { comments, deletedComments, expansionPanelOpen } = this.state
        return (
            <div>

                <ExpansionPanel className={classes.root} expanded={this.state.expansionPanelOpen} onChange={() => null}>
                    <ExpansionPanelSummary>
                        <div className={classes.column}>
                            <ApplyComment user={user} id={this.props.article} renderComment={this.renderComment} />
                        </div>
                        <div className={classes.column}>
                            {<Vote voteCount={this.props.articleVotes} id={this.props.article} origin={"article"} />}
                        </div>
                        <div>
                            {<Button size="small" variant="contained" color="secondary" className={classes.button}
                                onClick={() => {
                                    this.setState({
                                        expansionPanelOpen: !expansionPanelOpen
                                    })
                                }} >
                                {!expansionPanelOpen ? 'View Comments ': 'Hide comments'} <CommentIcon className={classes.commentIcon} /></Button>}
                        </div>

                    </ExpansionPanelSummary>
                    {comments.map((comment) => {
                            return (
                                !deletedComments.includes(comment._id) ? 
                                <div key={comment._id}>
                                    <CommentsPanel
                                        title={comment.title}
                                        created_at={moment(comment.created_at).fromNow()}
                                        created_by={comment.created_by.username}
                                        avatar={comment.created_by.avatar_url}
                                        body={comment.body}
                                        comments={comment.comments}
                                        voteCount={comment.votes}
                                        id={comment._id}
                                        user={this.props.user}
                                        deleteComment={this.deleteComment} />
                                </div> : null
                            )
                    })
                    }
                </ExpansionPanel>
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

    deleteComment = (id) => {
        api.deleteCommentfromArticle(id)
            .then(() => {
                this.setState({
                    deletedComments: [...this.state.deletedComments, id]
                })
            })
    }
}

export default withStyles(styles)(Comments);

Comments.propTypes = {
    article: propTypes.string.isRequired,
    user: propTypes.string
}