import React, { Component } from 'react';
import * as api from '../api/api';
import propTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import ArrowUpward from '@material-ui/icons/ArrowUpward'
import ArrowDownward from '@material-ui/icons/ArrowDownward'


const styles = theme => ({
    downButton: {
        '&:hover': {
            color: 'red',
        }
    },
    upButton: {
        '&:hover': {
            color: 'green'
        }
    },
    btnGroup: {
        display: "block",
    },
});

class Vote extends Component {
    state = {
        voted: '',
        vote: 0
    }
    render() {
        const { id, voteCount, origin, classes } = this.props
        return (
            <div className={classes.btnGroup}>
                <IconButton variant="fab" color="default" className={classes.upButton} disabled={this.state.vote > 0 ? true : false} onClick={() => { this.voteOnBody(id, 'up', origin) }}><ArrowUpward /></IconButton>
                {voteCount + this.state.vote}
                <IconButton variant="fab" color="default" className={classes.downButton} disabled={this.state.vote < 0 ? true : false} onClick={() => { this.voteOnBody(id, 'down', origin) }}><ArrowDownward /></IconButton>
            </div>
        );
    }

    voteOnBody = (id, direction, origin) => {

        let { voted } = this.state
        if (origin === 'article') {
            api.voteOnArticle(id, direction, voted)
            this.setState({
                voted: direction,
                vote: direction === 'up' ? + 1 : - 1
            })
        } else {
            api.voteOnComment(id, direction, voted)
            this.setState({
                voted: direction,
                vote: direction === 'up' ? + 1 : - 1
            })
        }
    }
}

Vote.propTypes = {
    voteCount: propTypes.number.isRequired,
    id: propTypes.string.isRequired,
    origin: propTypes.string.isRequired
}

export default withStyles(styles)(Vote);