export const SHOW_TOP_10_WORDS = 'SHOW_TOP_10_WORDS';

export const showTop10Words = (option) => {
    return {
      type: SHOW_TOP_10_WORDS,
      payload: {option}
    }
}

// export const lastWeek = (option) => {
//   return {
//     type: LAST_WEEK,
//     payload: option
//   }
// }

// export const overKarma = (option) => {
//   return {
//     type: OVER_KARMA,
//     payload: option
//   }
// }