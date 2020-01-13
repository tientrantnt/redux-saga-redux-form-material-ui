import React, {Component} from 'react'
import {withStyles} from '@material-ui/styles';
import styles from './styles';
import {AppBar,Toolbar, IconButton, Typography, InputBase, MenuItem, Menu} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import AccountCircle from '@material-ui/icons/AccountCircle';
import MoreIcon from '@material-ui/icons/MoreVert';


const menuId = 'primary-search-account-menu';
const mobileMenuId = 'primary-search-account-menu-mobile';
class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mobileMoreAnchorEl: null,
      anchorEl: null
    }
  }

  handleProfileMenuOpen = e => {
    this.setState({anchorEl: e.currentTarget});
  }
  handleMobileMenuOpen = e => {
    this.setState({mobileMoreAnchorEl: e.currentTarget});
  }
  handleMobileMenuClose = () => {
    this.setState({mobileMoreAnchorEl: null});
  }
  renderMobileMenu = () => {
    const {mobileMoreAnchorEl} = this.state;
    const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);
    return (
      <Menu
        anchorEl={mobileMoreAnchorEl}
        anchorOrigin={{
        vertical: 'top',
        horizontal: 'right'
      }}
        id={mobileMenuId}
        keepMounted
        transformOrigin={{
        vertical: 'top',
        horizontal: 'right'
      }}
        open={isMobileMenuOpen}
        onClose={this.handleMobileMenuClose}>
        <MenuItem onClick={this.handleProfileMenuOpen}>
          <IconButton
            aria-label="account of current user"
            aria-controls="primary-search-account-menu"
            aria-haspopup="true"
            color="inherit">
            <AccountCircle/>
          </IconButton>
          <p>Profile</p>
        </MenuItem>
      </Menu>
    );
  }
  handleMenuClose = () => {
    this.setState({anchorEl: null});
  }
  renderMenu = () => {
    const {anchorEl} = this.state;
    const isMenuOpen = Boolean(anchorEl);
    return (
      <Menu
        anchorEl={anchorEl}
        anchorOrigin={{
        vertical: 'top',
        horizontal: 'right'
      }}
        id={menuId}
        keepMounted
        transformOrigin={{
        vertical: 'top',
        horizontal: 'right'
      }}
        open={isMenuOpen}
        onClose={this.handleMenuClose}>
        <MenuItem onClick={this.handleMenuClose}>My account</MenuItem>
      </Menu>
    );
  }
  handleToggleSidebar = () =>{
    const { showSidebar, onToggleSidebar}  = this.props;
    console.log (showSidebar);
    if(onToggleSidebar){
      onToggleSidebar(!showSidebar);
    }
  }
  render() {
    const {classes, name} = this.props;
    return (
      <div className={classes.grow}>
        <AppBar position="static">
          <Toolbar>
            <IconButton
              edge="start"
              className={classes.menuButton}
              color="inherit"
              aria-label="open drawer"
              onClick={this.handleToggleSidebar}
            >
              <MenuIcon/>
            </IconButton>
            <Typography className={classes.title} variant="h6" noWrap>
              {name}
            </Typography>
            <div className={classes.search}>
              <div className={classes.searchIcon}>
                <SearchIcon/>
              </div>
              <InputBase
                placeholder="Search…"
                classes={{
                root: classes.inputRoot,
                input: classes.inputInput
              }}
                inputProps={{
                'aria-label': 'search'
              }}/>
            </div>
            <div className={classes.grow}/>
            <div className={classes.sectionDesktop}>
              <IconButton
                edge="end"
                aria-label="account of current user"
                aria-controls={menuId}
                aria-haspopup="true"
                onClick={this.handleProfileMenuOpen}
                color="inherit">
                <AccountCircle/>
              </IconButton>
            </div>
            <div className={classes.sectionMobile}>
              <IconButton
                aria-label="show more"
                aria-controls={mobileMenuId}
                aria-haspopup="true"
                onClick={this.handleMobileMenuOpen}
                color="inherit">
                <MoreIcon/>
              </IconButton>
            </div>
          </Toolbar>
        </AppBar>
        {this.renderMobileMenu()}
        {this.renderMenu()}
      </div>
    )
  }
}

export default withStyles(styles)(Header);