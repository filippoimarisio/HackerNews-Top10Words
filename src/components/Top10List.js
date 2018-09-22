import React, { Component } from 'react';

export const Top10List = top10List => {
  const list = top10List.top10List

  if ( list === 'goodKarma')
  return (
    <div>
      This feature is currently not available
    </div>
  )
  return (
    <div>
      {list.length > 0 && (
        <div>
          Top 10 used words
          <table>
            <tbody>
              <tr>
                <th>
                  Rank
                </th>
                <th>
                  Word
                </th>
                <th>
                  Counter
                </th>
              </tr>
              {list.map(word => {
                return (
                  <tr key={word.word}>
                    <td>
                      {list.indexOf(word) + 1}
                    </td>
                    <td>
                      {word.word}
                    </td>
                    <td>
                      {word.counter}
                    </td>
                  </tr>
                )
              })} 
            </tbody>
          </table>
        </div>
      )}
    </div>
  )
}