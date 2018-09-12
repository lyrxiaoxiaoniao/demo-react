import * as actionTypes from './actionTypes';

export function getTitle(title) {
  return {
    type: actionTypes.CHANGE_TITLE,
    title: title
  }
}