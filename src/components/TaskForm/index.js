import React, {Component} from 'react'
import styles from './styles';
import {withStyles} from '@material-ui/styles';
import {Button, TextField, Modal, Grid, Box} from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Clear';
class TaskForm extends Component {

  render() {
    const {classes, open, onCloseForm} = this.props;
    return (
      <Modal open={open} onClose={onCloseForm}>
        <div className={classes.paper}>
          <div className={classes.header}>
            <span className={classes.title}>Thêm mới</span>
            <CloseIcon className={classes.icon} onClick={onCloseForm}/>
          </div>
          <div className={classes.content}>
            <form>
              <Grid container>
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
            </form>
          </div>
        </div>
      </Modal>

    )
  }
}
export default withStyles(styles)(TaskForm);