import React, { Component } from 'react';

export const Top10List = top10List => {
  const list = top10List.top10List
  return (
    <div>
      Here're the results
      <ol>
        {list.map(word => {
          return (
            <li key={word.word}>
              {word.word} : {word.counter} times
            </li>
          )
        })} 
      </ol>
    </div>
  )
}