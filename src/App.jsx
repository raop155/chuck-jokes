import React, { useState, useEffect } from 'react';

const API_URL = 'http://api.icndb.com/jokes/random';

function App() {
  const [joke, setJoke] = useState('');

  const getJoke = () => {
    fetch(API_URL)
      .then((response) => response.json())
      .then((data) => setJoke(data.value.joke));
  };

  useEffect(() => {
    getJoke();
  }, []);

  return (
    <div>
      <div className='box'>
        <h2>Chuck Norris Jokes Generator</h2>
        <p dangerouslySetInnerHTML={{ __html: joke }} />
        <button onClick={getJoke}>
          Get new joke
          <span role='img' aria-label='joke emoji'>
            😎
          </span>
        </button>
      </div>
    </div>
  );
}

export default App;
