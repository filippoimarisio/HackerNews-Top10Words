
export const last25Top10 = list => {
  const cleanData = completeData(list)
  const orderedList = orderByTime(cleanData)
  const last25Stories = last25(orderedList)
  const titles = extractTitles(last25Stories)
  const top10Words = wordsCounter(titles)
  return top10Words
}

export const lastWeekTop10 = list => {
  const cleanData = completeData(list)
  const orderedList = orderByTime(cleanData)
  const lastWeekStories = lastWeek(orderedList)
  const titles = extractTitles(lastWeekStories)
  const top10Words = wordsCounter(titles)
  return top10Words
}

const completeData = list => {
  return list.filter(story => story)
}

const orderByTime = list => {
  return list.sort((a, b) => a.time - b.time)
}

const last25 = list => {
  return list.slice(0,25)
}

const extractTitles = list => {
  const readyTitles = list.map(story => {
    const title = story.title
    const splitTitle = title.split(/(\,|\.|\ |\:|\;|\?|\!|\(|\))/)
    const justWords = splitTitle.filter(word => ![',','.',' ',':',';','?','!','(',')',''].includes(word))
    const homoWords = justWords.map(word => word.toLowerCase())
    return homoWords
  })
  return readyTitles
}

const wordsCounter = list => {
  const counter = {}
  list.map(story => {
    story.map(word => {
      if (counter[word]) counter[word] ++
      else counter[word] = 1
    }); 
  }); 
  const organizedCounter = []
  Object.keys(counter).map(words => {
    organizedCounter.push({word: words, counter: counter[words]})
  }); 

  const sortedCounter = organizedCounter.sort((a, b) => b.counter - a.counter).slice(0,10)

  return sortedCounter
}

const lastWeek = list => {
  const now = (new Date().getTime())/1000
  const weekInSeconds = 86400 * 7
  const filteredList = list.filter(story => {
    return story.time > (now - weekInSeconds)
  })
  return filteredList
}



