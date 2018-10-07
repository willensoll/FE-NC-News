import React, { Component } from 'react';
import AddCommentButton from './AddCommentButton'
import CommentsPanel from './PanelComponents/CommentsPanel'
import Vote from './Vote.jsx'
import * as api from '../apiUtils/api';
import moment from 'moment';
import propTypes from 'prop-types';
import CommentIcon from '@material-ui/icons/Comment'

import {
    withStyles, ExpansionPanel, ExpansionPanelSummary,
    Button
} from '@material-ui/core';

const styles = () => ({
    root: {
        width: '100%',
        backgroundColor: '#ecf0f1',
        border: 'solid 1px white',
    },
    column: {
        flexBasis: '43.33%',
        marginBottom: '0.1rem'
    },
    button: {
        marginTop: "0.5rem",
    },
});

class Comments extends Component {
    state = {
        comments: [],
        deletedComments: [],
        noComments: false,
        expansionPanelOpen: false
    }

    render() {
        const { classes, user, article, articleVotes } = this.props
        const { comments, deletedComments, expansionPanelOpen, noComments } = this.state
        return (
            <div>
                <ExpansionPanel className={classes.root} expanded={expansionPanelOpen} onChange={() => null}>
                    <ExpansionPanelSummary>
                        <div className={classes.column}>
                            <AddCommentButton user={user} id={article} renderComment={this.renderComment} />
                        </div>
                        <div className={classes.column}>
                            {<Vote voteCount={articleVotes} id={article} origin={"article"} />}
                        </div>
                        <div>
                            {<Button size="small" variant="contained" color="secondary" className={classes.button} disabled={noComments ? true : false}
                                onClick={() => {
                                    this.setState({
                                        expansionPanelOpen: !expansionPanelOpen
                                    })
                                }} >
                                {noComments === true ? 'No Comments' : !expansionPanelOpen ? 'View Comments ' : 'Hide comments'} <CommentIcon className={classes.commentIcon} /></Button>}
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
                    })}
                </ExpansionPanel>
            </div>
        );
    }

    componentDidMount = () => {
        let articleId = this.props.article
        api.fetchComments(articleId)
            .then((comments) => {
                this.setState({
                    comments: comments.sort((a, b) => b.created_at.localeCompare(a.created_at))
                })
            }, (error) => {
                if (error.code === 404) this.setState({
                    noComments: true
                })
            })
    }

    componentDidUpdate = (prevProps) => {
        let articleId = this.props.article
        if (prevProps !== this.props) {
            api.fetchComments(articleId)
                .then((comments) => {
                    this.setState({
                        comments: comments.sort((a, b) => b.created_at.localeCompare(a.created_at)),
                    })
                }, (error) => {
                    if (error.code === 404) this.setState({
                        noComments: true
                    })
                })
        }
    }

    renderComment = (id, newComment) => {
        api.postCommentToArticle(id, newComment)
            .then((addedComment) => {
                this.setState({
                    comments: [addedComment.data.addedComment, ...this.state.comments],
                    noComments: false
                })
            })
    }

    deleteComment = (id) => {
        api.deleteCommentfromArticle(id)
            .then(() => {
                this.setState({
                    deletedComments: [...this.state.deletedComments, id],
                })
            })
    }
}

export default withStyles(styles)(Comments);

Comments.propTypes = {
    article: propTypes.string.isRequired,
    user: propTypes.string.isRequired
}