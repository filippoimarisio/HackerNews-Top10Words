import * as request from "superagent";

export const FETCH_DATA = 'FETCH_DATA';

const HNurl ='https://hacker-news.firebaseio.com/v0/'

export const fetchData = () => dispatch => {

  request
    .get(`${HNurl}newstories.json`)
    .then(response =>
      dispatch({
        type: FETCH_DATA,
        payload: response.body
      })
    )
    .catch(err => alert(err));
}
