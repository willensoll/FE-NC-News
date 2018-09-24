import React from 'react';
import propTypes from 'prop-types';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Comments from "../Comments"
import Avatars from '../Avatars'

import {
    withStyles, ExpansionPanel, ExpansionPanelSummary,
    ExpansionPanelDetails, Typography,
} from '@material-ui/core';

const styles = () => ({
    root: {
        width: '100%',
        '&:hover': {
            borderStyle: 'solid',
            borderWidth: '0.45px',
        }
    },
    avatarColumn: {
        borderRight: '1px solid red',
        maxWidth: '5%',
        width: "3rem",
        paddingRight: "1rem",
        marginRight: '1rem',
    },
    column: {
        flexBasis: '45%'
    },
    avatarDis: {
        marginRight: '1rem'
    }
});
const ArticlePanel = ({ title, created_at, created_by, avatar, body, voteCount, id, user, classes }) => {
    return (
        <ExpansionPanel className={classes.root}>
            <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                <div className={classes.avatarColumn}>
                    <Avatars avatar={avatar} user={created_by} className={classes.avatarDis} />
                </div>
                <div className={classes.titleColumn}>
                    <Typography variant="title" className={classes.heading} align="left">{title}</Typography>
                    <Typography variant="caption" className={classes.extraInfo} align="left" gutterBottom>{created_at} - by {created_by}</Typography>
                </div>
            </ExpansionPanelSummary>
            <ExpansionPanelDetails>
                <Typography>
                    {body}
                </Typography>
            </ExpansionPanelDetails>
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