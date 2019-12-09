import React, { Component } from 'react'
import styles from './styles';
import { withStyles } from '@material-ui/styles';
import AddIcon from '@material-ui/icons/Add';
import {STATUSES} from './../../constants/index';
import {Button, Grid} from  '@material-ui/core';
import TaskList from  './../../components/TaskList/index';
const listTask = [
    {
        id:1,
        title : 'Read book',
        description : 'Read book Material UI',
        status : 0
    },
    {
        id:2,
        title : 'Play football',
        description : 'Play football F04',
        status : 1
    },
    {
        id:3,
        title : 'Play Game',
        description : 'Play Game LOL',
        status : 2
    }
];
class Taskboard extends Component {
    renderBoard () {
        let  xhtml  = null;
        xhtml = (
            <Grid container spacing={2}>
                {
                    STATUSES.map((status, index )=>{
                        const taskFiltered = listTask.filter(task => task.status === status.value);
                        return (
                            <TaskList tasks={taskFiltered} status={status} key={status.value}/>
                        )
                    })
                }
            </Grid>
        );
        return xhtml;
    }
    render() {
        const {classes} = this.props;
        return (
            <div className={classes.taskboard}>
                <Button variant="contained" color="primary" className={classes.button}>  
                    <AddIcon /> Thêm mới công việc
                </Button>
                {this.renderBoard()}
            </div>
        )
    }
}
export default  withStyles(styles)(Taskboard)