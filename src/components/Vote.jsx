import React, { Component } from 'react';
import * as api from '../api/api';

class Vote extends Component {
    
    state = { 
        voted: '',
        vote: 0
     }
    render() { 
        const { id, voteCount, origin } = this.props
        return ( 
            <label>Votes: {voteCount + this.state.vote}
            <button onClick={() => {this.voteOnArticle(id, 'up', origin)}}>Up</button>
            <button onClick={() => {this.voteOnArticle(id, 'down', origin)}}>Down</button>
            </label> 
         );
    }

    voteOnArticle = (id, direction, origin) => {
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
                voted: direction
            })
        }
    }
}
 
export {Vote}