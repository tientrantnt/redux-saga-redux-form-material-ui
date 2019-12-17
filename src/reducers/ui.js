import * as uiTypes from './../constants/ui';

const InitialState = {
  showLoading: false
}
const reducer = (state = InitialState, action) => {
  switch (action.type) {
    case uiTypes.SHOW_LOADING:
      return {
        ...state,
        showLoading: true,
      }
    case uiTypes.HIDE_LOADING:
      return {
        ...state,
        showLoading: false,
      }
    default:
      return state
  }
}
export default reducer