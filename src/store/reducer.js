import * as actionTypes from './actionTypes'

const todoReducer = (state={}, action) => {
  switch (action.type) {
    case actionTypes.CHANGE_TITLE:
      return { ...state,
        title: action.title
      }
    default:
      return state
  }
}

export default todoReducer