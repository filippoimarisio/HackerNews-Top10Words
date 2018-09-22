import {SHOW_LIST} from '../actions/showList'

export default (state = [], action = {}) => {
  switch(action.type) {

    case SHOW_LIST:
      return action.payload

    default:
      return state
  }
}