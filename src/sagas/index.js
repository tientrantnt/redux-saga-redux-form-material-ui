import {
  fork,
  take,
  call,
  put,
  delay,
  takeEvery,
  takeLatest,
  select

} from 'redux-saga/effects';
import * as taskTypes from './../constants/task';
import {fetchListTask, fetchListTaskSuccess, fetchListTaskFailed, addTaskFailed, addTaskSuccess, updateTaskSuccess, updateTaskFailed} from './../actions/task';
import {getList, addTask, updateTask} from './../apis/task';
import {STATUS_CODE, STATUSES} from './../constants/index';
import {showLoading, hideLoading} from './../actions/ui';
import {hideModal} from './../actions/modal';

function * watchFetchListTaskAction() {
  while (true) {
    const action = yield take(taskTypes.FETCH_TASK);
    yield put(showLoading());
    const {params} = action.payload;
    const resp = yield call(getList, params);
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
  yield put(fetchListTask({q: keyword}));
  // const {keyword} = payload; const list = yield select(state =>
  // state.task.listTask); const filteredTast = list.filter(task =>
  // task.title.trim().toLowerCase().includes(keyword.trim().toLowerCase()));
  // yield put(filteTaskSuccess(filteredTast));
}

function * addTaskSaga({payload}) {
  const {title, description} = payload;
  yield put(showLoading());
  const resp = yield call(addTask, {title, description, status: STATUSES[0].value});
  const {status, data} = resp;
  if (status === STATUS_CODE.CREATED) {
    yield put(addTaskSuccess(data));
    yield put(hideModal());
  } else {
    yield put(addTaskFailed(data));
  }
  yield delay(1000);
  yield put(hideLoading());
}

function * updateTaskSaga({payload}) {
  const {title, description, status} = payload;
  const taskEditing = yield select(state => state.task.taskEditing);
  const resp = yield call(updateTask, {
    title,
    description,
    status
  }, taskEditing.id);
  const {status: statusCode, data} = resp;
  if (statusCode === STATUS_CODE.CREATED) {
    yield put(updateTaskSuccess(data));
    yield put(hideModal());
  } else {
    yield put(updateTaskFailed(data));
  }
  yield delay(1000);
  yield put(hideLoading());
}
function * rootSaga() {
  yield fork(watchFetchListTaskAction);
  yield takeLatest(taskTypes.FILTER_TASK, filterTaskSaga);
  yield takeEvery(taskTypes.ADD_TASK, addTaskSaga);
  yield takeLatest(taskTypes.UPDATE_TASK, updateTaskSaga);
}

export default rootSaga;