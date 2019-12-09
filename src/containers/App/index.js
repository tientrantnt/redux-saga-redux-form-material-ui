import React, { Component } from 'react'
import styles from './styles';
import { withStyles, ThemeProvider } from '@material-ui/styles';
import Taskboard from '../Taskboard';
import theme from './../../commons/Theme';

class App extends Component {
    render() {       
        return (
            <ThemeProvider theme={theme}>
                <Taskboard></Taskboard>
            </ThemeProvider>
          );
    }
}

export default withStyles(styles)(App);
