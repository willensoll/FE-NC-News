import React from 'react';
import Vote from './Vote'
import propTypes from 'prop-types';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import CommentIcon from '@material-ui/icons/Comment';
import {
    withStyles, ExpansionPanel, ExpansionPanelSummary,
    ExpansionPanelDetails, Typography,
    IconButton, Button,
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
    heading: {
        fontSize: theme.typography.pxToRem(15),
        fontWeight: theme.typography.fontWeightRegular,
    },
    voteColumn: {
        borderRight: '1px solid red',
        maxWidth: '5%',
        paddingRight: "1rem"
    },
    column: {
        flexBasis: '45%'
    }
});
const ArticlePanel = ({title, created_at, created_by, avatar, body, comments, voteCount, id, user, classes}) => {
    return (
        <ExpansionPanel className={classes.root}>
            <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                <div className={classes.voteColumn}>
                    <Typography>{voteCount} </Typography>
                </div>
                <div className={classes.titleColumn}>
                    <Typography className={classes.heading}>{title}</Typography>
                </div>
                {created_at}{created_by}

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
                    <IconButton>
                        {comments}
                        <CommentIcon />
                    </IconButton>
                </div>
                <div className={classes.column}>
                    {<Vote voteCount={voteCount} id={id} origin={"article"} />}
                </div>
                <Button>See more</Button>
            </ExpansionPanelActions>
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