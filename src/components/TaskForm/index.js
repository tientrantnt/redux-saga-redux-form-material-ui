import React, { Component } from 'react'
import styles from './styles';
import { withStyles } from '@material-ui/styles';
import { Button, Dialog, DialogActions, DialogContent,DialogTitle,TextField } from '@material-ui/core';
class TaskForm extends Component {
    
    render() {
        const {open,onCloseForm} = this.props;
        return (
            <Dialog
                open={open}
                onClose={onCloseForm}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title">Thêm công việc</DialogTitle>
                <DialogContent>
                <TextField
                    id="standard-helperText"
                    label="Helper text"                   
                    
                />
                
                <TextField
                    id="standard-multiline-flexible"
                    label="Multiline"
                    multiline
                    rowsMax="4"               
                />
                </DialogContent>
                <DialogActions>
                <Button onClick={onCloseForm} color="primary">
                    Disagree
                </Button>
                <Button onClick={onCloseForm} color="primary" autoFocus>
                    Agree
                </Button>
                </DialogActions>
            </Dialog>
        )
    }
}
export default withStyles(styles)(TaskForm);