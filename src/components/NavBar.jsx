import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import * as api from '../api/api'

class NavBar extends Component {
    state = {
        topics: []
    }
    render() {
        const { topics } = this.state
        return (
            <div>
                <Link to="/">Home</Link> || &nbsp;
            {topics.map(topic => {
                    return (<div className={topic._id}>
                        <Link to={`/topics/${topic.slug}`}>{topic.title}</Link> || &nbsp;
                </div>
                    )
                })}
            </div>
        );
    }


    componentDidMount = () => {
        api.fetchTopics()
            .then(topics => {
                this.setState({
                    topics
                })
            })
    }
}

export { NavBar };