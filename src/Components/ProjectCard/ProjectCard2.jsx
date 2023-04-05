import React from 'react'
//import Image from 'src/Images/matrix.jpg';

function ProjectCard2() {
  return (
    <div class="max-w-sm bg-white border border-gray shadow-md rounded-lg overflow-hidden shadow-lg">
        <img class="w-full" src={Image} alt="matrix"/>
        <div class="px-6 py-4">
            <header class="font-bold text-xl mb-2">Space Invaders</header>
            <p class="text-gray-700 text-base">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas deleniti deserunt magnam dolor vel quis ducimus eveniet porro, ea repellendus dolores corporis necessitatibus unde harum debitis enim totam hic. Rem?</p>
        </div>
        <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"><a href='https://github.com/Honshu11/space-invaders-react'>Github Project</a></button>
        <p>Last edited on: {(new Date()).toISOString()}</p>
        <div class="px-6 pt-4 pb-2">
            <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#Coding</span>
            <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#Learning</span>
            <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#WebDev</span>
        </div>
    </div>
  )
}

export default ProjectCard2;