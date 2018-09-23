import React from 'react';
import Vote from '../Vote'
import propTypes from 'prop-types';
import RemoveComment from '../RemoveComment'
import { once } from 'lodash';
//import defaultavatar from '/apple.jpg'

import {
    withStyles,
    ExpansionPanelDetails, Typography,
    ExpansionPanelActions, Avatar
} from '@material-ui/core';

const styles = theme => ({
    root: {
        width: '100%',
    },
    column: {
        flexBasis: '45%'
    }
});

const CommentsPanel = ({ created_at, created_by, avatar, body,
    voteCount, id, user, classes, deleteComment }) => {
        return (
            <div>
                <ExpansionPanelDetails>
                    <div>
                        <Typography className={classes.commentBody}>
                            {body}<br />
                        </Typography>
                        <Typography variant="caption">{created_at}
                            {created_by}
                            <Avatar src={avatar} onError={once((e) => e.target.src="/apple.jpg")} alt={`${created_by}'s avatar`} className={classes.avatar} />
                        </Typography>
                    </div>
                </ExpansionPanelDetails>
                <ExpansionPanelActions>
                    {user === created_by
                        ? <RemoveComment id={id}
                            user={user}
                            deleteComment={deleteComment} />
                        : null}
                    {<Vote voteCount={voteCount} id={id} origin={"comment"} />}
                </ExpansionPanelActions>
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