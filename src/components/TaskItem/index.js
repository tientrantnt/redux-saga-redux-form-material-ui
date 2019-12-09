import React, {Component} from 'react'
import {withStyles} from '@material-ui/styles';
import styles from './styles';
import {
  Grid,
  Card,
  CardContent,
  CardActions,
  Typography,
  Fab,
  Icon
} from '@material-ui/core';

class TaskItem extends Component {
  render() {
    const {classes, task, status} = this.props;
    const {title,description} = task;
    return (
      <Card className={classes.card}>
        <CardContent>
          <Grid container justify="space-between">
            <Grid item md={8}>
              <Typography component="h2">{title}</Typography>
            </Grid>
            <Grid item md={4}>
              {status.label}
            </Grid>
          </Grid>
          <p>{description}</p>
        </CardContent>
        <CardActions className={classes.CardActions}>          
          <Fab color="primary" aria-label="Edit" className={classes.fab} size="small">
            <Icon fontSize="small">
              edit_icon
            </Icon>
          </Fab>
          <Fab color="primary" aria-label="Delete" className={classes.fab} size="small">
            <Icon fontSize="small">
              delete_icon
            </Icon>
          </Fab>     
        </CardActions>
      </Card>
    )
  }
}

export default withStyles(styles)(TaskItem);