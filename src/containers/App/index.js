import { ThemeProvider, withStyles } from '@material-ui/styles';
import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import configureStore from '../../redux/configureStore';
import Taskboard from '../Taskboard';
import GlobalLoading from './../../components/GlobalLoading';
import theme from './../../commons/Theme';
import styles from './styles';
import ModalCommon from './../../components/ModalCommon';

const store = configureStore();

class App extends Component {
  render() {
    return (
      <Provider store = {store}>
        <ThemeProvider theme={theme}>
          <ToastContainer />
          <GlobalLoading />
          <Taskboard />
          <ModalCommon />
        </ThemeProvider>
      </Provider>
    );
  }
}

export default withStyles(styles)(App);
