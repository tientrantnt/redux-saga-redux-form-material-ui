import React, {Component} from 'react'
import {withStyles} from '@material-ui/styles';
import styles from './styles';
import Header from './Header';
import Sidebar from './Sidebar';

class Dashboard extends Component {
  render() {
    const {children, classes, name} = this.props;
    return (
      <div className={classes.dashboard}>
        <Header name={name}/>
        <div className={classes.wrapper}>
          <Sidebar/>
          <div className={classes.wrapperContent}>{children}</div>
        </div>
      </div>
    )
  }
}

export default withStyles(styles)(Dashboard);