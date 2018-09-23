import React, { Component } from 'react';
import Vote from '../Vote'
import propTypes from 'prop-types';
import RemoveComment from '../RemoveComment'
import {once} from 'lodash';
//import defaultavatar from '/apple.jpg'

import {
    withStyles,
    ExpansionPanelDetails, Typography,
    ExpansionPanelActions, Avatar
} from '@material-ui/core';

const styles = theme => ({
    root: {
        width: '100%',
        '&:hover': {
            borderStyle: 'solid',
            borderWidth: '0.45px',
        }
    },
    heading: {
        fontSize: theme.typography.pxToRem(15),
        fontWeight: theme.typography.fontWeightRegular,
    },
    column: {
        flexBasis: '45%'
    }
});

class CommentsPanel extends Component {
    state = {  }
    render() {
        const { created_at, created_by, avatar, body,
            voteCount, id, user, classes, deleteComment } = this.props
        return (
            <div>
                <ExpansionPanelDetails>
                    <div>
                    <Typography className={classes.commentBody}>
                        {body}<br />
                    </Typography>
                    <Typography variant="caption">{created_at}
                        {created_by}
                        <Avatar src={avatar} onError={once((e) => this.replaceAvatar(e))} alt={`${created_by}'s avatar`} className={classes.avatar} />
                    </Typography>
                    </div>

                </ExpansionPanelDetails>
                <ExpansionPanelActions>

                    {this.props.user === created_by
                        ? <RemoveComment id={id}
                            user={user}
                            deleteComment={deleteComment} />
                        : null}
                        {<Vote voteCount={voteCount} id={id} origin={"comment"} />}
                </ExpansionPanelActions>
            </div>

        );
    }

    replaceAvatar = (e) => {
        e.target.src = "/apple.jpg"
    }
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