import React, {Component} from 'react'
import {withStyles} from '@material-ui/styles';
import styles from './styles';
import {Grid, Box} from '@material-ui/core';
import TaskItem from './../TaskItem/index';

class TaskList extends Component {
  render() {
    const {classes, tasks, status, onClickEdit} = this.props;
    return (
      <Grid item md={4} xs={12} key={status.value}>
        <Box mt={2} mb={2}>
          <div className={classes.status}>{status.label}</div>
        </Box>
        <div className={classes.wrapperListTask}>
          {tasks.map((task) => {
            return (<TaskItem
              key={task.id}
              task={task}
              status={status}
              onClickEdit=
              {()=>onClickEdit(task)}/>)
          })
}
        </div>
      </Grid>
    )
  }
}

export default withStyles(styles)(TaskList);