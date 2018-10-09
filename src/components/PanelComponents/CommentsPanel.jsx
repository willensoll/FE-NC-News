import React from 'react';
import Vote from '../Vote'
import propTypes from 'prop-types';
import RemoveComment from '../RemoveComment'
import Avatars from '../Avatars'

import {
    withStyles,
    ExpansionPanelDetails, Typography,
    ExpansionPanelActions,
} from '@material-ui/core';

const styles = () => ({
    column: {
        flexBasis: '80%',
        marginRight: '1rem'
    },
    commentPanel: {
        border: 'solid 1px white'
    },
    commentBlock: {
        maxWith: "100%"
    },
    voteBlock: {
        textAlign: 'right',
    },
    avatarCol: {
        borderRight: '1px solid white',
        maxWidth: '5%',
        width: "3rem",
        paddingRight: "1rem",
        margin: '1.5rem 1rem 0 0'
    },
});

const CommentsPanel = ({ created_at, created_by, avatar, body,
    voteCount, id, user, classes, deleteComment }) => {
    return (
        <div>
            <ExpansionPanelDetails className={classes.commentPanel}>
                <div className={classes.avatarCol}>
                    <Avatars avatar={avatar} user={created_by} className={classes.avatar} />
                </div>
                <div className={classes.column}>
                    <Typography variant="caption">
                        Posted {created_at} by {created_by}
                    </Typography>
                    <Typography variant="body1">
                        {body}<br />
                    </Typography>
                </div>
                <ExpansionPanelActions className={classes.voteBlock}>
                    {user === created_by ? <RemoveComment id={id} user={user} deleteComment={deleteComment} />
                        : <Vote voteCount={voteCount} id={id} origin={"comment"} />}
                </ExpansionPanelActions>
            </ExpansionPanelDetails>
        </div>

    );
}

export default withStyles(styles)(CommentsPanel);

CommentsPanel.propTypes = {
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