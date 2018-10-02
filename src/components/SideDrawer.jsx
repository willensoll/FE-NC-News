import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import MenuIcon from '@material-ui/icons/Menu';
import {
    withStyles, Divider, IconButton, MenuItem
} from '@material-ui/core';


const styles = theme => ({
    toolbar: theme.mixins.toolbar,
    drawerPaper: {
        position: 'relative',
        width: 240,
    },
    mainLink: {
        marginTop: '1rem'
    },
    formControl: {
        margin: theme.spacing.unit * 3,
    },
    group: {
        margin: `${theme.spacing.unit}px 0`,
    },
});

class SideDrawer extends React.Component {
    state = {
        drawerStatus: false,
        anchorEl: null,
        value: null
    };

    render() {
        const { classes, topics } = this.props;
        const { anchorEl, drawerStatus } = this.state
        const open = Boolean(anchorEl)
        const topicList = (
            <div className={classes.toolBar}>
                <List> {topics.map(topic => {
                    return (
                        <div key={topic._id}>
                            <Link to={`/topics/${topic.slug}`}><MenuItem onClick={this.handleClose}>
                                {topic.title}
                            </MenuItem></Link>
                        </div>
                    )
                })}
                </List>
                <Divider />
            </div>
        );

        return (
            <div>
                <IconButton
                    className={classes.menuButton}
                    color="inherit"
                    aria-label="Menu"
                    aria-owns={open ? 'menu-appbar' : null}
                    aria-haspopup="true"
                    onClick={this.toggleDrawer(true)}>
                    <MenuIcon />
                </IconButton>
                <Drawer classes={{ paper: classes.drawerPaper }} open={drawerStatus} onClose={this.toggleDrawer(false)}>
                    <div
                        tabIndex={0}
                        role="button"
                        onClick={this.toggleDrawer(false)}
                        onKeyDown={this.toggleDrawer(false)}
                    >
                        <Divider />
                        <h2>Menu</h2>
                        <Divider />
                        <div className={classes.mainLink}>
                            <Link to="/"><MenuItem>Main Page</MenuItem></Link>

                        </div>
                        <h4>Article Topics</h4>
                        {topicList}
                    </div>
                </Drawer>
            </div>
        );
    }

    toggleDrawer = (open) => () => {
        this.setState({
            drawerStatus: open,
        });
    };

    handleClose = () => {
        this.setState({ drawerStatus: false });
    };  
}

SideDrawer.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SideDrawer);
