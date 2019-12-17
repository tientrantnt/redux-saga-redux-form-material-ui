import * as uiTypes from './../constants/ui';

const InitialState = {
  showLoading: false
}
const reducer = (state = InitialState, action) => {
  switch (action.type) {
    case uiTypes.SHOW_LOADING:
      return {
        showLoading: true,
        ...state
      }
    case uiTypes.HIDE_LOADING:
      return {
        showLoading: false,
        ...state
      }
    default:
      return state
  }
}
export default reducer