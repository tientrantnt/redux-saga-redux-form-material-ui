import {
  fork,
  take,
  call,
  put,
  delay,
  takeLatest,
  select
} from 'redux-saga/effects';
import * as taskTypes from './../constants/task';
import {fetchListTaskSuccess, fetchListTaskFailed,filteTaskSuccess} from './../actions/task';
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

function * filterTaskSaga({payload}) {
  yield delay(500);
  const {keyword} = payload;
  const list = yield select(state => state.task.listTask);
  const filteredTast = list.filter(task => task.title.trim().toLowerCase().includes(keyword.trim().toLowerCase()));
  yield put(filteTaskSuccess(filteredTast));
}

function * rootSaga() {
  yield fork(watchFetchListTaskAction);
  yield takeLatest(taskTypes.FILTER_TASK, filterTaskSaga);
}

export default rootSaga;