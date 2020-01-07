import React, {Component} from 'react'
import {withStyles} from '@material-ui/styles';
import styles from './styles';
import Header from './Header';
import Sidebar from './Sidebar';

class Dashboard extends Component {
    render() {
        const {children} = this.props;
        return (
            <div>
                <Header />
                <Sidebar />
                {children}
            </div>
        )
    }
}

export default withStyles(styles)(Dashboard);