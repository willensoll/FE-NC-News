import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import * as api from '../api/api'
import '../css/NavBar.css'
import MenuIcon from '@material-ui/icons/Menu';
import { withStyles, AppBar, Toolbar, Typography, Button, IconButton, MenuItem, Menu } from '@material-ui/core';

const styles = {
    root: {
        flexGrow: 1,
        "text-align": "center"
    },
    grow: {
        flexGrow: 1,
    },
    menuButton: {
        marginLeft: -12,
        marginRight: 20,
    },
    logoimg: {
        width: "40%",
        "vertical-align": "middle"
    },
    addartbutton: {
        fontSize: "12.5px",
        color: 'white'
    }

};

class NavBar extends Component {
    state = {
        topics: [],
        anchorEl: null
    }
    render() {
        const { classes } = this.props;
        const { topics, anchorEl } = this.state;
        const open = Boolean(anchorEl)
        return (
            <div className={classes.root}>
                <AppBar color="secondary" position="static">
                    <Toolbar>
                        <IconButton
                            className={classes.menuButton}
                            color="inherit"
                            aria-label="Menu"
                            aria-owns={open ? 'menu-appbar' : null}
                            aria-haspopup="true"
                            onClick={this.handleMenu}>
                            <MenuIcon />
                        </IconButton>
                        <Menu
                            id="menu-appbar"
                            anchorEl={anchorEl}
                            anchorOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            open={open}
                            onClose={this.handleClose}
                        >
                            <MenuItem onClick={this.handleClose}><Link to={"/"}>Home</Link></MenuItem>
                            {topics.map(topic => {
                                return (
                                    <div key={topic._id}>
                                        <MenuItem onClick={this.handleClose}><Link to={`/topics/${topic.slug}`}>{topic.title}</Link></MenuItem>
                                    </div>
                                )
                            })}
                        </Menu>
                        <Typography variant="title" color="inherit" className={classes.grow}>
                            <img className={classes.logoimg} src={"/nclogo.png" }alt="Northcoders Logo"></img>
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


    handleChange = event => {
        this.setState({ auth: event.target.checked });
    };

    handleMenu = event => {
        this.setState({ anchorEl: event.currentTarget });
    };

    handleClose = () => {
        this.setState({ anchorEl: null });
    };
}

export default withStyles(styles)(NavBar);