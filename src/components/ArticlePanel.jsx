import React from 'react';
import propTypes from 'prop-types';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import CommentIcon from '@material-ui/icons/Comment';
import Comments from "./Comments"
import {
    withStyles, ExpansionPanel, ExpansionPanelSummary,
    ExpansionPanelDetails, Typography,
    IconButton,
    Divider, ExpansionPanelActions
} from '@material-ui/core';

const styles = theme => ({
    root: {
        width: '100%',
        '&:hover': {
            borderStyle: 'solid',
            borderWidth: '0.45px',
        }
    },
    commentsColumn: {
        borderRight: '1px solid red',
        maxWidth: '5%',
        width: "3rem",
        paddingRight: "1rem",
        marginRight: '1rem',
    },
    column: {
        flexBasis: '45%'
    },
    commentCount: {
        marginRight: '1rem'
    }
});
const ArticlePanel = ({ title, created_at, created_by, avatar, body, comments, voteCount, id, user, classes }) => {
    return (
        <ExpansionPanel className={classes.root}>
            <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                <div className={classes.commentsColumn}>
                    <IconButton>
                        {comments}
                        <CommentIcon className={classes.commentCount} />
                    </IconButton>
                </div>
                <div className={classes.titleColumn}>
                    <Typography variant="title" className={classes.heading} align="left">{title}</Typography>
                    <Typography variant="caption" className={classes.extraInfo} align="left" gutterBottom>{created_at} - by {created_by}</Typography>
                </div>
            </ExpansionPanelSummary>
            <ExpansionPanelDetails>
                <Typography>
                    {avatar}
                    {body} <br />
                </Typography>
            </ExpansionPanelDetails>
            <Divider />
            <ExpansionPanelActions>
                <div className={classes.column}>
                
                </div>
            </ExpansionPanelActions>
            <div className={classes.column}>
            <Comments article={id} user={user} articleVotes={voteCount} />
            </div>
        </ExpansionPanel>
    )

}

ArticlePanel.propTypes = {
    title: propTypes.string,
    created_at: propTypes.string,
    created_by: propTypes.string,
    avatar: propTypes.string,
    body: propTypes.string,
    comments: propTypes.number,
    voteCount: propTypes.number,
    id: propTypes.string,
    user: propTypes.string,
    classes: propTypes.object
}


export default withStyles(styles)(ArticlePanel)