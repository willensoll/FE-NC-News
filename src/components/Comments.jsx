import React, { Component } from 'react';
import { RemoveComment, AddComment } from './index'
import CommentsPanel from './panel-components/CommentsPanel'
import Vote from './Vote.jsx'
import * as api from '../api/api';
import moment from 'moment';
import propTypes from 'prop-types';

import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import CommentIcon from '@material-ui/icons/Comment'
import AddComment from '@material-ui/icons/AddComment'
import {
    withStyles, ExpansionPanel, ExpansionPanelSummary,
    ExpansionPanelDetails, Typography,
    IconButton, Button,
    Divider, ExpansionPanelActions
} from '@material-ui/core';

const styles = theme => ({
    root: {
        width: '100%',
    },
    heading: {
        fontSize: theme.typography.pxToRem(15),
        fontWeight: theme.typography.fontWeightRegular,
    },
    voteColumn: {
        borderRight: '1px solid red',
        maxWidth: '5%',
        width: "2.5rem",
        paddingRight: "1rem"
    },
    column: {
        flexBasis: '45%'
    }
});

class Comments extends Component {
    state = {
        comments: [],
        deletedComments: [],
        expansionPanelOpen: false
    }

    render() {
        const { classes } = this.props
        const { comments, deletedComments } = this.state
        return (
            <div>
                {/*  <AddComment id={this.props.article} user={this.props.user} renderComment={this.renderComment} /> */}

                <ExpansionPanel className={classes.root} expanded={this.state.expansionPanelOpen}>
                    <ExpansionPanelSummary expandIcon={<Button variant="contained" color="secondary" className={classes.button}
                        onClick={() => {
                            this.setState({
                                expansionPanelOpen: !this.state.expansionPanelOpen
                            })
                        }} >
                        View Comments<CommentIcon className={classes.commentIcon} /></Button>}>
                        <div className={classes.column}>
                        </div>

                        {<Vote voteCount={this.props.articleVotes} id={this.props.article} origin={"article"} />}
                        <Button></Button>
                    </ExpansionPanelSummary>
                    {comments.map((comment) => {
                        if (!deletedComments.includes(comment._id)) {
                            return (
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
                                </div>
                            )
                        }
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