import React, { Component } from 'react';
import * as api from '../api/api';
import propTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';

import ArrowUpward from '@material-ui/icons/ArrowUpward'
import ArrowDownward from '@material-ui/icons/ArrowDownward'


const styles = theme => ({
    downButton: {
        margin: theme.spacing.unit,
        '&:hover': {
            background: 'red',
        }
      },
    upButton: {
        margin: theme.spacing.unit,    
      '&:hover': {
          background: 'green'
      }
    },
    

    extendedIcon: {
      marginRight: theme.spacing.unit,
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
            <label>
            <IconButton variant="fab" color="black" className={classes.upButton} onClick={() => {this.voteOnBody(id, 'up', origin)}}><ArrowUpward /></IconButton>
            
            {voteCount + this.state.vote}
            
            <IconButton variant="fab" color="black" className={classes.downButton} onClick={() => {this.voteOnBody(id, 'down', origin)}}><ArrowDownward /></IconButton>
            </label> 
         );
    }

    voteOnBody = (id, direction, origin) => {
        
        let {voted} = this.state
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