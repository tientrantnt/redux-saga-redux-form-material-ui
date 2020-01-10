import React, {Component} from 'react'
import {withStyles} from '@material-ui/styles';
import styles from './styles';
import {Route} from 'react-router-dom';
import Dashboard from './../../../components/Dashboard';

class AdminLayoutRoute extends Component {
  render() {
    const {
      component: YourComponent,
      ...remainProps
    } = this.props;
    return (      
      <Route
        {...remainProps}
        render=
        { routerProps=>{ return ( <Dashboard {...remainProps}> <YourComponent {...routerProps}/> </Dashboard> ) } }/>

    )
  }
}

export default withStyles(styles)(AdminLayoutRoute);