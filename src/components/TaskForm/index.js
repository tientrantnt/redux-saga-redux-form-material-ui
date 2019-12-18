import React, { Component } from 'react'
import styles from './styles';
import { withStyles } from '@material-ui/styles';
import { Button, TextField, Modal, Grid, Box} from '@material-ui/core';
class TaskForm extends Component {

  render() {
    const { classes, open, onCloseForm } = this.props;
    return (
      <Modal open={open} onClose={onCloseForm}>
        <form>
          <div className={classes.paper}>
            <Grid container >
              <Grid item xs={12}>
                <TextField
                  id="standard-helperText"
                  label="Helper text"
                  className={classes.textField}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  id="standard-multiline-flexible"
                  label="Multiline"
                  multiline
                  rowsMax="4"
                  className={classes.textField}
                />
              </Grid>
              <Grid item xs={12} >
                <Box display="flex" flexDirection="row-reverse" mt={1}>
                  <Box>
                  <Button variant="contained" onClick={onCloseForm} color="primary" ml={2}>
                    Lưu Lại
                  </Button>
                  </Box>
                  <Box>
                  <Button variant="contained" onClick={onCloseForm} color="primary" autoFocus>
                    Hủy Bỏ
                  </Button>
                  </Box>
                  
                </Box>
              </Grid>
            </Grid>
          </div>
        </form>
      </Modal>

    )
  }
}
export default withStyles(styles)(TaskForm);