import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import * as api from '../apiUtils/api'
import SideDrawer from './SideDrawer.jsx'
import { withStyles, AppBar, Toolbar, Typography, Button } from '@material-ui/core';

const styles = theme => ({
    root: {
        flexGrow: 1,
        textAlign: "center",
        zIndex: 1,
        overflow: 'hidden',
        position: 'relative',
        display: 'flex',
    },
    grow: {
        flexGrow: 1,
    },
    appBar: {
        zIndex: theme.zIndex.drawer + 1,
    },
    menuButton: {
        marginLeft: -12,
        marginRight: 20,
    },
    logoimg: {
        width: "40%",
        verticalAlign: "middle"
    },
    addartbutton: {
        fontSize: "12.5px",
        color: 'white'
    }

});

class NavBar extends Component {
    state = {
        topics: [],

    }
    render() {
        const { classes } = this.props;
        const { topics } = this.state;

        return (
            <div className={classes.root}>
                <AppBar color="secondary" position="static" className={classes.appBar}>
                    <Toolbar>
                        <SideDrawer topics={topics}/>
                        <Typography variant="title" color="inherit" className={classes.grow}>
                            <Link to="/"><img className={classes.logoimg} src={"/nclogo.png" }alt="Northcoders Logo" href="/"></img></Link> 
                            {'<NEWS />'} 
                        </Typography>
                        <Link to={'/articles/add_article'} style={{textDecoration: 'none'}}> <Button className={classes.addartbutton} color="inherit">Add Article</Button></Link>
                    </Toolbar>
                </AppBar>
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

    componentDidUpdate = (prevProps) => {
        if (prevProps !== this.props)
            api.fetchTopics()
                .then(topics => {
                    this.setState({
                        topics
                    })
                })
    }
}

export default withStyles(styles)(NavBar);
