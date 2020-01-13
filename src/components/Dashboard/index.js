import React, {Component} from 'react'
import {withStyles} from '@material-ui/styles';
import styles from './styles';
import Header from './Header';
import Sidebar from './Sidebar';
import {connect} from 'react-redux';
import {compose, bindActionCreators} from 'redux';
import * as uiActions  from './../../actions/ui';

class Dashboard extends Component {
  handleToggleSidebar = value =>{
    const {uiActionCreators} = this.props;
    const {hideSidebar,showSidebar} = uiActionCreators;
    if(value === true){
      showSidebar();
    }
    else {
      hideSidebar();
    }
  }
  render() {
    const {children, classes, name, showSidebar} = this.props;
    return (
      <div className={classes.dashboard}>
        <Header name={name} showSidebar={showSidebar} onToggleSidebar={this.handleToggleSidebar}/>
        <div className={classes.wrapper}>
          <Sidebar showSidebar={showSidebar} onToggleSidebar={this.handleToggleSidebar}/>
          <div className={classes.wrapperContent}>{children}</div>
        </div>
      </div>
    )
  }
}
const mapStateToProps = state => {
  return {
    showSidebar : state.ui.showSidebar
  }
}
const mapDispatchToProps = dispatch =>{
  return {
    uiActionCreators : bindActionCreators (uiActions,dispatch)
  }
}
const withConnect = connect (
  mapStateToProps,mapDispatchToProps
)
export default compose(
  withConnect,
  withStyles(styles)
)(Dashboard);