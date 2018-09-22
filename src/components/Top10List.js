import React from 'react';
import '../App.css';

export const Top10List = top10List => {
  const list = top10List.top10List

  if ( list === 'goodKarma')
  return (
    <div>
      <h3 className='notAvailable'>
        This feature is currently not available
      </h3>
    </div>
  )
  return (
    <div>
      {list.length > 0 && (
        <div>
          <h1>
            Top 10 used words
          </h1>
          <table className='resultsTable'>
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