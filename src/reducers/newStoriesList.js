import {FETCH_NEW_STORIES} from '../actions/fetchData'

export default (state = [], action = {}) => {

  switch(action.type) {
    
    case FETCH_NEW_STORIES:
      return state.concat(action.payload)

    default:
      return state
  }
}