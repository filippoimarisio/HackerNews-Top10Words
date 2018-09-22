

export const last25Top10 = (list) => {
  const orderedList = orderByTime(list)
  const last25Stories = last25(orderedList)
  const titles = extractTitles(last25Stories)
  const top10Words = wordsCounter(titles)
  return top10Words
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
    })
  })
  const organizedCounter = []
  Object.keys(counter).map(words => {
    organizedCounter.push({word: words, counter: counter[words]})
  })

  const sortedCounter = organizedCounter.sort((a, b) => b.counter - a.counter).slice(0,10)

  return sortedCounter
}


