import {SHOW_TOP_10_WORDS} from '../actions/showTop10Words'

export default (state = {}, action = '') => {
  switch(action.type) {
    case SHOW_TOP_10_WORDS:
      return action.payload 
    default:
      return state
  }
}