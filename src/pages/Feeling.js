import React, { useState } from 'react';


function Feelings() {
    const [feeling, setFeeling] = useState('');
  
    return (
      <div>
        <h1>How do you feel?</h1>
        <button onClick={() => setFeeling('good')}>Good</button>
        <button onClick={() => setFeeling('normal')}>Normal</button>
        <button onClick={() => setFeeling('bad')}>Bad</button>
        <p>You selected: {feeling}</p>
      </div>
    );
  }
  
  export default Feelings;