import React from 'react'

const App = () => {
  return (
    <div className=' h-screen bg-black  text-white  '>
      <form action="" className='flex p-10 flex-col gap-5 items-start'>
        <input type="text" 
        placeholder='Enter Task Heading'
        className=' px-5 py-2 border-2 rounded w-1/2 '
         />

         <input type="text" 
        placeholder='Enter Details '
        className=' px-5 py-2 border-2 rounded h-20 w-1/2 '
         />

        <button className=' bg-white text-black px-5 py-2 rounded w-1/2'>Add Note</button>
      </form>
    </div>
  )
}

export default App
