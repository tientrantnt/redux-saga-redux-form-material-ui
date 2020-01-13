import React, {Component} from 'react'
import {withStyles} from '@material-ui/styles';
import styles from './styles';
import {Drawer, List, ListItem} from '@material-ui/core';
import {ADMIN_ROUTES} from './../../../constants/index';
import {NavLink} from 'react-router-dom';
class Sidebar extends Component {
  toggleDrawer = value => {
    const {onToggleSidebar} = this.props;
    if(onToggleSidebar){
      onToggleSidebar(value);
    }
  }
  renderList = () => {
    const {classes} = this.props;
    let xhtml = null;
    xhtml = <div className={classes.list}>
      <List component="div">
        {
          ADMIN_ROUTES.map((item) => {
            return(
              <NavLink
                to={item.path}
                exact={item.exact}
                className={classes.menuLink}
                activeClassName={classes.menuLinkActive}
                key={item.path}
              >
                 <ListItem key={item.path} button className={classes.menuItem}>{item.name}</ListItem>
              </NavLink>             
            );
          })
        }
      </List>
    </div>
    return xhtml;
  }
  render() {
    const {classes,showSidebar} = this.props;
    return (
      <Drawer open={showSidebar} onClose={() => this.toggleDrawer(false)} classes={{
        paper: classes.drawerPaper,
      }}
      variant = "persistent">
        {this.renderList()}
      </Drawer>
    )
  }
}

export default withStyles(styles)(Sidebar);