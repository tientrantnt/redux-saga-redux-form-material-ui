import React, {Component} from 'react'
import {withStyles} from '@material-ui/styles';
import styles from './styles';
import {Drawer, List, ListItem} from '@material-ui/core';
import {ADMIN_ROUTES} from './../../../constants/index';
class Sidebar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: true
    }
  }
  toggleDrawer = value => {
    this.setState({open: value});
  }
  renderList = () => {
    const {classes} = this.props;
    let xhtml = null;
    xhtml = <div className={classes.list}>
      <List component="div">
        {
          ADMIN_ROUTES.map((item) => {
            return(
              <ListItem key={item.path} button className={classes.menuItem}>{item.name}</ListItem>
            );
          })
        }
      </List>
    </div>
    return xhtml;
  }
  render() {
    const {open} = this.state;
    const {classes} = this.props;
    return (
      <Drawer open={open} onClose={() => this.toggleDrawer(false)} classes={{
        paper: classes.drawerPaper,
      }}
      variant = "persistent">
        {this.renderList()}
      </Drawer>
    )
  }
}

export default withStyles(styles)(Sidebar);