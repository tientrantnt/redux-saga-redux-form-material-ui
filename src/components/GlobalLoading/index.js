import React, {Component} from 'react';
import styles from './styles';
import {withStyles} from '@material-ui/styles';
import LoadingIcon from './../../assets/images/loading.gif';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

class GlobalLoading extends Component {
  render() {
    const {classes} = this.props;
    return (
      <div className={classes.globalloading}>
        <img src={LoadingIcon} alt="loading" className={classes.icon}/>        
      </div>
    )
  }
}

const withConnect =  connect ();

export default withStyles(styles)(GlobalLoading);