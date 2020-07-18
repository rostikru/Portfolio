import React, { useState } from 'react';

const EnglishGame = () => {
  const [wordsSet, setWordsSet] = useState([
    {id: 1, en: 'book', u: 'книга'},
    {id: 2, en: 'sea', ua: 'море'},
    {id: 3, en: 'mouse', ua: 'миша'}
  ]);
  return (
    <div className="App">
      <h1>EnglishGame</h1>
      <button onClick={() => setWordsSet([
    {id: 1, en: 'booking', u: 'книга'},
    {id: 2, en: 'seaing', ua: 'море'},
    {id: 3, en: 'mouseing', ua: 'миша'}
  ])}></button>
      {wordsSet.map((item) => item.en)}

    </div>
  );
}

export default EnglishGame;