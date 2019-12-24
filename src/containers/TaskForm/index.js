import React, {Component} from 'react';
import styles from './styles';
import {withStyles} from '@material-ui/styles';
import {Button, Grid, Box} from '@material-ui/core';
import {connect} from 'react-redux';
import {compose, bindActionCreators} from 'redux';
import { Field, reduxForm } from 'redux-form';
import * as modalActions from './../../actions/modal';
import * as taskActions from './../../actions/task';
import renderTextField from '../../components/FormHelper/TextField';
import validate from './validate';

class TaskForm extends Component {
  handleSubmitForm = data =>{
    const {title, description } = data;
    const { tasklActionCreators } = this.props;
    const {addTask} = tasklActionCreators;
    addTask(title, description );
  }
  render() {
    const {classes, modalActionCreators, handleSubmit,invalid,submitting} = this.props;
    const {hideModal} = modalActionCreators;
    return (
      <form onSubmit={handleSubmit(this.handleSubmitForm)}>
        <Grid container>
          <Grid item xs={12}>
            <Field 
              id="title"
              label="Tiêu đề"
              className={classes.textField}
              margin = "normal"
              name = "title"
              component={renderTextField}
            />
          </Grid>
          <Grid item xs={12}>
            <Field 
              id="description"
              label="Mô tả"
              className={classes.textField}
              multiline
              rowsMax="4"
              margin = "normal"
              name = "description"
              component={renderTextField}
            />
          </Grid>
          <Grid item xs={12}>
            <Box display="flex" flexDirection="row-reverse" mt={1}>              
              <Box ml={1}>
                <Button variant="contained" color="primary" autoFocus onClick={hideModal}>
                  Hủy Bỏ
                </Button>
              </Box>
              <Box>
                <Button disabled={invalid || submitting} variant="contained" color="primary" ml={2} type="submit">
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

const mapStateToProps = state => {
  return {
    initialValues : {
      title : state.task.taskEditing ? state.task.taskEditing.title : null,
      description : state.task.taskEditing ? state.task.taskEditing.description : null,
    }
  }
};
const mapDispatchToProps = dispatch => ({
  modalActionCreators: bindActionCreators(modalActions, dispatch),
  tasklActionCreators: bindActionCreators(taskActions, dispatch)
});
const withReduxForm = reduxForm({
  form: FORM_NAME,
  validate
});
const withConnect = connect(mapStateToProps, mapDispatchToProps);
export default compose(withConnect,withReduxForm, withStyles(styles))(TaskForm);
