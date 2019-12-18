import {fork, take, call, put, delay} from 'redux-saga/effects';
import * as taskTypes from './../constants/task';
import {fetchListTaskSuccess, fetchListTaskFailed} from './../actions/task';
import {getList} from './../apis/task';
import {STATUS_CODE} from './../constants/index';
import {showLoading, hideLoading} from './../actions/ui';
function * watchFetchListTaskAction() {
  while (true) {
    yield take(taskTypes.FETCH_TASK);
    yield put(showLoading());
    const resp = yield call(getList);
    const {status, data} = resp;
    if (status === STATUS_CODE.SUCCESS) {
      yield put(fetchListTaskSuccess(data));
    } else {
      yield put(fetchListTaskFailed(data));
    }
    yield delay(1000);
    yield put(hideLoading());
  }
}

function * watchCreateTaskAction() {
  console.log('watch create task action');
}

function * rootSaga() {
  yield fork(watchFetchListTaskAction);
  yield fork(watchCreateTaskAction);
}

export default rootSaga;