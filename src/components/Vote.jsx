import React, { Component } from 'react';
import * as api from '../api/api';
import propTypes from 'prop-types';

class Vote extends Component {
    
    state = { 
        voted: '',
        vote: 0
     }
    render() { 
        const { id, voteCount, origin } = this.props
        return ( 
            <label>Votes: {voteCount + this.state.vote}
            <button onClick={() => {this.voteOnBody(id, 'up', origin)}}>Up</button>
            <button onClick={() => {this.voteOnBody(id, 'down', origin)}}>Down</button>
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
 
export {Vote}