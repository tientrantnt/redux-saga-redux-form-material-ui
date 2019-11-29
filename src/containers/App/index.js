import React, { Component } from 'react'
import Button from '@material-ui/core/Button';
import styles from './styles';
import { withStyles } from '@material-ui/styles';

class App extends Component {
    render() {
        const {classes} = this.props;
        return (
            <div className="App">
             <Button variant="contained" color="secondary">Default</Button>
             <div className={classes.box}>
                 <div>A</div>
                 <div>B</div>
                 <div>C</div>
             </div>
            </div>
          );
    }
}

export default withStyles(styles)(App);
