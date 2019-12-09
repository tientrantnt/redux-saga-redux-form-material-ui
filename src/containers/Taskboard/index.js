import React, { Component } from 'react'
import styles from './styles';
import { withStyles } from '@material-ui/styles';
import { STATUSES } from './../../constants/index';
import { Button, Grid, Icon } from '@material-ui/core';
import TaskList from './../../components/TaskList/index';
import TaskForm from '../../components/TaskForm';
const listTask = [
    {
        id: 1,
        title: 'Read book',
        description: 'Read book Material UI',
        status: 0
    },
    {
        id: 2,
        title: 'Play football',
        description: 'Play football F04',
        status: 1
    },
    {
        id: 3,
        title: 'Play Game',
        description: 'Play Game LOL',
        status: 2
    }
];
class Taskboard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            open : false
        }
    }
    
    renderBoard() {
        let xhtml = null;
        xhtml = (
            <Grid container spacing={2}>
                {
                    STATUSES.map((status, index) => {
                        const taskFiltered = listTask.filter(task => task.status === status.value);
                        return (
                            <TaskList tasks={taskFiltered} status={status} key={status.value} />
                        )
                    })
                }
            </Grid>
        );
        return xhtml;
    }
    handleOpenForm = () =>{
        this.setState({
            open : true
        })
    }
    handleClose = () =>{
        this.setState({
            open : false
        })
    }
    renderForm() {
        let xhtml = null;
        const {open} = this.state;
        xhtml = <TaskForm open = {open} onCloseForm = {this.handleClose}/>;
        return xhtml;
    }
    render() {
        const { classes } = this.props;
        return (
            <div className={classes.taskboard}>
                <Button variant="contained" color="primary" className={classes.button} onClick = {this.handleOpenForm}>
                    <Icon fontSize="small">
                        add_icon
                    </Icon> Thêm mới công việc
                </Button>
                {this.renderBoard()}
                {this.renderForm()}
            </div>
        )
    }
}
export default withStyles(styles)(Taskboard)