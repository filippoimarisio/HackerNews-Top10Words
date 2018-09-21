import * as request from "superagent";

export const FETCH_DATA = 'FETCH_DATA';
export const FETCH_NEW_STORIES = 'FETCH_NEW_STORIES';


const HNurl ='https://hacker-news.firebaseio.com/v0/'

const fetchNewStories = () => dispatch => {

  return request
    .get(`${HNurl}newstories.json`)
    .then(response =>
      dispatch({
        type: FETCH_DATA,
        payload: response.body
      })
    )
    .catch(err => alert(err));
}

export const fetchData = () => (dispatch, getState) => {

  dispatch(fetchNewStories())
    .then(() => {

      const newStories = getState().newStories
      newStories.map(story => {
        request
          .get(`${HNurl}item/${story}.json`)
          .then(response =>
            dispatch({
              type: FETCH_NEW_STORIES,
              payload: response.body
            })
          )
          .catch(err => alert(err));
      })
    }
  )
}


