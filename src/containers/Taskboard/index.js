import React, {Component} from 'react'
import styles from './styles';
import {withStyles} from '@material-ui/styles';
import {STATUSES} from './../../constants/index';
import {Button, Grid, Icon} from '@material-ui/core';
import TaskList from './../../components/TaskList/index';
import TaskForm from '../TaskForm';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as taskActions from './../../actions/task';
import * as modalActions from './../../actions/modal';
import SearchBox from './../../components/SearchBox/index';

class Taskboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false
    }
  }
  componentDidMount() {
    const {taskActionCreators} = this.props; 
    const {fetchListTask} = taskActionCreators;
    fetchListTask();
  }
  
  handleFetch = () => {
    const {taskActionCreators} = this.props;
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
          return (<TaskList tasks={taskFiltered} status={status} key={status.value} mb={1}/>)
        })
}
      </Grid>
    );
    return xhtml;
  }
  
  handleOpenForm = () => {
    const {modalActionCreators} = this.props;
    const {showModal,changeModalContent,changeModalTitle} = modalActionCreators;
    showModal();
    changeModalTitle('Thêm mới công việc');
    changeModalContent(<TaskForm />);
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
    const { value } = e.target;
    const {taskActionCreators} = this.props;
    const {filterTask} = taskActionCreators;
    filterTask(value);
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
      </div>
    )
  }
}
const mapStateToProps = (state, ownProps) => {
  return {listTask: state.task.listTask}
}
const mapDispatchToProps = dispatch => {
  return {
    taskActionCreators: bindActionCreators(taskActions, dispatch),
    modalActionCreators: bindActionCreators(modalActions, dispatch)
  }
}

export default withStyles(styles)(connect(mapStateToProps, mapDispatchToProps)(Taskboard));