import * as actionTypes from './actionTypes'

const todoReducer = (state={}, action) => {
  switch (action.type) {
    case actionTypes.CHANGE_TITLE:
      return { ...state,
        title: action.title
      }
    case actionTypes.CHANGE_INPUTVALUE:
      return { ...state,
        inputValue: action.inputValue
      }
    case actionTypes.HANDLE_BTN_CLICK:
      return { ...state,
        inputValue: '',
        list: action.list
      }
    case actionTypes.HANDLE_CLICK_DELETE:
      console.log(state)
      return { ...state,
        list: action.list
      }
    default:
      return state
  }
}
export default todoReducer