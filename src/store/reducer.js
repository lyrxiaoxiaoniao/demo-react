import * as actionTypes from './actionTypes'
const defaultState = {
  inputValue: '',
  list: [],
  title: 'ceshi'
}
const todoReducer = (state = defaultState, action) => {
  const newState = JSON.parse(JSON.stringify(state))
  switch (action.type) {
    case actionTypes.CHANGE_TITLE:
      return { ...newState,
        title: action.title
      }
    case actionTypes.CHANGE_INPUTVALUE:
      return { ...newState,
        inputValue: action.inputValue
      }
    case actionTypes.HANDLE_BTN_CLICK:
      newState.list.push(newState.inputValue)
      return { ...newState,
        inputValue: ''
      }
    case actionTypes.HANDLE_CLICK_DELETE:
      newState.list.splice(action.index, 1)
      return { ...newState }
    default:
      return state
  }
}
export default todoReducer