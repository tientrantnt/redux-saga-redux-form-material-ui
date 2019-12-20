import React, {Component} from 'react';
import styles from './styles';
import {withStyles} from '@material-ui/styles';
import {connect} from 'react-redux';
import {compose,bindActionCreators} from 'redux';
import * as modalActions from './../../actions/modal';
import {Modal} from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Clear';
class ModalCommon extends Component {
  render() {
    const {classes, open,component,modalActionCreators,title} = this.props;
    const {hideModal} = modalActionCreators;
    return (
      <Modal open={open} onClose={hideModal}>
        <div className={classes.paper}>
          <div className={classes.header}>
            <span className={classes.title}>{title}</span>
            <CloseIcon className={classes.icon} onClick={hideModal}/>
          </div>
          <div className={classes.content}>
            {component}
          </div>
        </div>
      </Modal>
    )
  }
}
const mapStateToProps = state => ({
    open : state.modal.showModal,
    component : state.modal.component,
    title : state.modal.title,

});
const mapDispatchToProps = dispatch => ({
    modalActionCreators : bindActionCreators(modalActions,dispatch) 
});

const withConnect = connect (mapStateToProps,mapDispatchToProps);
export default compose(
    withConnect,
    withStyles(styles)
)(ModalCommon);