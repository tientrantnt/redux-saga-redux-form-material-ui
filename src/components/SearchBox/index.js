import React, { Component } from 'react';
import {withStyles} from '@material-ui/styles';
import styles from './styles';
import TextField from '@material-ui/core/TextField';
class SearchBox extends Component {
    render() {
        const {classes,handleChange} = this.props;
        return (            
            <form className={classes.container} noValidate autoComplete="off">
                <TextField  className={classes.textField} onChange={handleChange} placeholder="Nhập từ khóa"/>
            </form>
        )
    }
}


export default withStyles(styles)(SearchBox);