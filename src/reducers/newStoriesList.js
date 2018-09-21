import {FETCH_NEW_STORIES} from '../actions/fetchData'
import {RESET_STATE} from '../actions/resetState'

export default (state = [], action = {}) => {

  switch(action.type) {
    
    case FETCH_NEW_STORIES:
    const allNews = state.concat(action.payload)
    return allNews

    case RESET_STATE:{
      state = []
    }
      return state

    default:
      return state
  }
}