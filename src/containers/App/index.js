import {ThemeProvider, withStyles} from '@material-ui/styles';
import React, {Component} from 'react';
import {Provider} from 'react-redux';
import {ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import configureStore from '../../redux/configureStore';
import Taskboard from '../Taskboard';
import GlobalLoading from './../../components/GlobalLoading';
import theme from './../../commons/Theme';
import styles from './styles';
import ModalCommon from './../../components/ModalCommon';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import { ADMIN_ROUTES } from './../../constants/index';
import AdminLayoutRoute from './../../commons/Layout/AdminLayoutRoute';

const store = configureStore();

class App extends Component {
  renderAdminRoutes(){
    let xhtml = null;
    xhtml = ADMIN_ROUTES.map((route)=>{
      return (
        <AdminLayoutRoute ket={route.path} route={route} />
      );
    });
    return xhtml;
  }
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <ThemeProvider theme={theme}>
            <ToastContainer/>
            <GlobalLoading/>          
            <ModalCommon/>
            <Switch>
              {this.renderAdminRoutes()}
            </Switch>
          </ThemeProvider>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default withStyles(styles)(App);
