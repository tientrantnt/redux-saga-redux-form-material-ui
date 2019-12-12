import * as taskAPIs from './../apis/task';
import * as taskContants from './../constants/task';

export const fetchListTask = () =>{
    return {
        type:taskContants.FETCH_TASK
    }
}
export const fetchListTaskSuccess = (data) =>{
    return {
        type:taskContants.FETCH_TASK_SUCCESS,
        payload : {
            data
        }
    }
}
export const fetchListTaskFailed = (error) =>{
    return {
        type:taskContants.FETCH_TASK_FAILED,
        paload : {
            error
        }
    }
}
/**
 * B1 : fetchListTaskRequest()
 * B2 : resest state task = > []
 * B3 : fetchListTaskSuccess (data response )
 */

export const fetchListTaskRequest = () => {
    return dispatch => {
        dispatch(fetchListTask());
        taskAPIs.getList().then(resp => {
            const {data} = resp;
            dispatch(fetchListTaskSuccess(data));
        }).catch(error => {
            dispatch(fetchListTaskFailed(error));
        })
    }
}