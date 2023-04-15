import React from 'react'

function ProjectCard2() { //add accent as param
  //bg-${accent}
  //var styling =`max-w-sm border border-gray rounded-lg overflow-hidden shadow-lg mx-auto items-center mt-4`;
  return (
    <div className="max-w-sm border border-gray odd:bg-[#e5e6eb] even:bg-[#c0c5ce] rounded-lg overflow-hidden shadow-lg mx-auto items-center mt-4">
        <img className="w-full" src="Images/matrix.jpg" alt="matrix"/>
        <div className="px-6 py-4">
            <header className="font-bold text-xl mb-2">Space Invaders</header>
            <p className="text-gray-700 text-base">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas deleniti deserunt magnam dolor vel quis ducimus eveniet porro, ea repellendus dolores corporis necessitatibus unde harum debitis enim totam hic. Rem?</p>
        </div>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"><a href='https://github.com/Honshu11/space-invaders-react'>Github Project</a></button>
        <p class="text-xs flex-wrap">Last edited on: {(new Date()).toISOString()}</p>
        <div className="px-6 pt-4 pb-2">
            <span className="inline-block bg-gray-300 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#Coding</span>
            <span className="inline-block bg-gray-300 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#Learning</span>
            <span className="inline-block bg-gray-300 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#WebDev</span>
        </div>
    </div>
  )
}

export default ProjectCard2;