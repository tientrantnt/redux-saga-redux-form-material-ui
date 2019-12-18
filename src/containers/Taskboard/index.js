import React, {Component} from 'react'
import styles from './styles';
import {withStyles} from '@material-ui/styles';
import {STATUSES} from './../../constants/index';
import {Button, Grid, Icon} from '@material-ui/core';
import TaskList from './../../components/TaskList/index';
import TaskForm from '../../components/TaskForm';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as taskActions from './../../actions/task';
import SearchBox from './../../components/SearchBox/index';

class Taskboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false
    }
  }
  componentDidMount() {
    // const {taskActionCreators} = this.props; const {fetchListTaskRequest} =
    // taskActionCreators; const {fetchListTask} = taskActionCreators;
    // fetchListTask();
  }
  handleFetch = () => {
    const {taskActionCreators} = this.props;
    // const {fetchListTaskRequest} = taskActionCreators;
    const {fetchListTask} = taskActionCreators;
    fetchListTask();
  }
  renderBoard() {
    let xhtml = null;
    const {listTask} = this.props;
    xhtml = (
      <Grid container spacing={2}>
        {STATUSES.map((status, index) => {
          const taskFiltered = listTask.filter(task => task.status === status.value);
          return (<TaskList tasks={taskFiltered} status={status} key={status.value}/>)
        })
}
      </Grid>
    );
    return xhtml;
  }
  handleOpenForm = () => {
    this.setState({open: true})
  }
  handleClose = () => {
    this.setState({open: false})
  }
  renderForm() {
    let xhtml = null;
    const {open} = this.state;
    xhtml = <TaskForm open={open} onCloseForm={this.handleClose}/>;
    return xhtml;
  }
  handleFilter = e =>{
    console.log('e:' , e);
  }
  renderSearchBox(){
    let xhtml = null;
    xhtml = <SearchBox handleChange={this.handleFilter}/>
    return xhtml;
  }
 
  render() {
    const {classes} = this.props;
    return (
      <div className={classes.taskboard}>
        <Button
          variant="contained"
          color="primary"
          className={classes.button}
          onClick={this.handleOpenForm}>
          <Icon fontSize="small">
            add_icon
          </Icon>
          Thêm mới công việc
        </Button>
        <Button
          variant="contained"
          color="primary"
          className={classes.button}
          onClick={this.handleFetch}>
          Fetch dữ liệu
        </Button>
        {this.renderSearchBox()}
        {this.renderBoard()}
        {this.renderForm()}
      </div>
    )
  }
}
const mapStateToProps = (state, ownProps) => {
  return {listTask: state.task.listTask}
}
const mapDispatchToProps = dispatch => {
  return {
    taskActionCreators: bindActionCreators(taskActions, dispatch)
  }
}
export default withStyles(styles)(connect(mapStateToProps, mapDispatchToProps)(Taskboard));