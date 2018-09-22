export const SHOW_LIST = 'SHOW_LIST'

export const showList = list => {
  return {
    type: SHOW_LIST,
    payload: list
  }
}