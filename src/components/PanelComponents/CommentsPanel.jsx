import React from 'react';
import Vote from '../Vote'
import propTypes from 'prop-types';
import RemoveComment from '../RemoveComment'
import { once } from 'lodash';

import {
    withStyles,
    ExpansionPanelDetails, Typography,
    ExpansionPanelActions, Avatar
} from '@material-ui/core';

const styles = () => ({
    column: {
        flexBasis: '80%',
        marginRight: '2rem'
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
        marginRight: '1rem',
    },
    avatar: {
        marginTop: '1.5rem'
    }
});

const CommentsPanel = ({ created_at, created_by, avatar, body,
    voteCount, id, user, classes, deleteComment }) => {
    return (
        <div>
            <ExpansionPanelDetails className={classes.commentPanel}>
                <div className={classes.avatarCol}>
                    <Avatar src={avatar} onError={once((e) => e.target.src = "/apple.jpg")}
                        alt={`${created_by}'s avatar`} className={classes.avatar} />
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