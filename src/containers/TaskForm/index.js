import React, {Component} from 'react';
import styles from './styles';
import {withStyles} from '@material-ui/styles';
import {Button, TextField, Grid, Box} from '@material-ui/core';
import {connect} from 'react-redux';
import {compose, bindActionCreators} from 'redux';
import { Field, reduxForm } from 'redux-form';
import * as modalActions from './../../actions/modal';

class TaskForm extends Component {
  handleSubmitForm = data =>{
    console.log(data);
  }
  render() {
    const {classes, modalActionCreators, handleSubmit } = this.props;
    const {hideModal} = modalActionCreators;
    return (
      <form onSubmit={handleSubmit(this.handleSubmitForm)}>
        <Grid container>
          <Grid item xs={12}>
            <Field name="firstName" component="input" type="text"/>
          </Grid>
          <Grid item xs={12}>
            <TextField
              id="standard-helperText"
              label="Tiêu đề"
              className={classes.textField}/>
          </Grid>
          <Grid item xs={12}>
            <TextField
              id="standard-multiline-flexible"
              label="Mô tả"
              multiline
              rowsMax="4"
              className={classes.textField}/>
          </Grid>
          <Grid item xs={12}>
            <Box display="flex" flexDirection="row-reverse" mt={1}>              
              <Box ml={1}>
                <Button variant="contained" color="primary" autoFocus onClick={hideModal}>
                  Hủy Bỏ
                </Button>
              </Box>
              <Box>
                <Button variant="contained" color="primary" ml={2} type="submit">
                  Lưu Lại
                </Button>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </form>

    )
  }
}

const FORM_NAME = 'TASK_MANAGEMENT';

const mapStateToProps = null;
const mapDispatchToProps = dispatch => ({
  modalActionCreators: bindActionCreators(modalActions, dispatch)
});
const withReduxForm = reduxForm({
  form: FORM_NAME
});
const withConnect = connect(mapStateToProps, mapDispatchToProps);
export default compose(withConnect,withReduxForm, withStyles(styles))(TaskForm);
