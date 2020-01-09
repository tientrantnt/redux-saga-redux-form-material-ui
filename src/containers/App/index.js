import {ThemeProvider, withStyles} from '@material-ui/styles';
import React, {Component} from 'react';
import {Provider} from 'react-redux';
import {ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import configureStore from '../../redux/configureStore';
import GlobalLoading from './../../components/GlobalLoading';
import theme from './../../commons/Theme';
import styles from './styles';
import ModalCommon from './../../components/ModalCommon';
import {BrowserRouter, Switch} from 'react-router-dom';
import { ADMIN_ROUTES } from './../../constants/index';
import AdminLayoutRoute from './../../commons/Layout/AdminLayoutRoute';
import CssBaseline from '@material-ui/core/CssBaseline';
const store = configureStore();

class App extends Component {
  renderAdminRoutes(){
    let xhtml = null;
    xhtml = ADMIN_ROUTES.map((route)=>{
      return (
        <AdminLayoutRoute key={route.path} name={route.name} path={route.path} component={route.component} exact={route.exact}/>
      );
    });
    return xhtml;
  }
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <ThemeProvider theme={theme}>
            <CssBaseline />
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
