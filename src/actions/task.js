import * as taskContants from './../constants/task';
import {STATUSES} from './../constants/index';
export const fetchListTask = (params = {}) => {
  return {type: taskContants.FETCH_TASK, payload: {
      params
    }}
}
export const fetchListTaskSuccess = (data) => {
  return {type: taskContants.FETCH_TASK_SUCCESS, payload: {
      data
    }}
}
export const fetchListTaskFailed = (error) => {
  return {type: taskContants.FETCH_TASK_FAILED, payload: {
      error
    }}
}

export const filterTask = keyword => {
  return {type: taskContants.FILTER_TASK, payload: {
      keyword
    }}
}

export const filteTaskSuccess = data => {
  return {type: taskContants.FILTER_TASK_SUCCESS, payload: {
      data
    }}
}

export const addTask = (title, description) => {
  return {
    type: taskContants.ADD_TASK,
    payload: {
      title,
      description
    }
  }
}
export const addTaskSuccess = (data) => {
  return {type: taskContants.ADD_TASK_SUCCESS, payload: {
      data
    }}
}
export const addTaskFailed = (error) => {
  return {type: taskContants.ADD_TASK_FAILED, payload: {
      error
    }}
}

export const setTaskEditing = task => {
  return {type: taskContants.SET_TASK_EDITING, payload: {
    task
    }}
}

export const updateTask = (title, description, status = STATUSES[0].value) => {
  return {
    type: taskContants.UPDATE_TASK,
    payload: {
      title,
      description,
      status
    }
  }
}
export const updateTaskSuccess = (data) => {
  return {type: taskContants.UPDATE_TASK_SUCCESS, payload: {
      data
    }}
}
export const updateTaskFailed = (error) => {
  return {type: taskContants.UPDATE_TASK_FAILED, payload: {
      error
    }}
}
export const deleteTask = id => {
  return {
    type: taskContants.DELETE_TASK,
    payload: {
      id
    }
  }
}
export const deleteTaskSuccess = (data) => {
  return {type: taskContants.DELETE_TASK_SUCCESS, payload: {
      data
    }}
}
export const deleteTaskFailed = (error) => {
  return {type: taskContants.DELETE_TASK_FAILED, payload: {
      error
    }}
}
/**
 * B1 : fetchListTaskRequest()
 * B2 : resest state task = > []
 * B3 : fetchListTaskSuccess (data response )
 */

// export const fetchListTaskRequest = () => {     return dispatch => {
// dispatch(fetchListTask());         taskAPIs.getList().then(resp => {    const
// {data} = resp;             dispatch(fetchListTaskSuccess(data));
// }).catch(error => {             dispatch(fetchListTaskFailed(error));     })
//  } }