import React from 'react';

function projectCard() {
  return (
    <>
      <div class='bg-white border border-black shadow-md rounded-lg w-1/3'>
        <h2 class='text-2xl'>Space Invaders</h2>
        <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"><a href='https://github.com/Honshu11/space-invaders-react'>Github Project</a></button>
        <p>Last edited on: {(new Date()).toISOString()}</p>
      </div>
    </>
  )
}

export default projectCard;