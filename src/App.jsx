import React from 'react'

const App = () => {
  return (
    <div className=' h-screen bg-black  text-white  '>
      <form action="" className='flex p-10  items-start justify-between'>
        <div className='flex-col w-1/2 items-start flex gap-5' >
          <input type="text" 
        placeholder='Enter Task Heading'
        className=' px-5 py-2 border-2 rounded w-full'
         />

         <input type="text" 
        placeholder='Enter Details '
        className=' px-5 py-2 border-2 rounded h-20 w-full'
         />

        <button className=' bg-white text-black px-5 py-2 rounded w-full'>Add Note</button>
        </div>
      </form>
    </div>
  )
}

export default App
