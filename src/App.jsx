import React from 'react'

const App = () => {
  const formHandler = (e) => {
    console.log(`form submited`)
    e.preventDefault();
  }
  return (
    <div className=' h-screen bg-black  text-white p-10 '>
      <form onSubmit={(e) => {
        formHandler(e)
      }} className='flex items-start justify-between flex-col'>

        <input type="text"
          placeholder='Enter Task Heading'
          className=' px-5 py-2 border-2 rounded w-full outline-none font-medium'
        />

        <textarea type="text"
          placeholder='Enter Details '
          className=' px-5 py-2 border-2 rounded h-32 w-full outline-none flex flex-row font-medium'
        />

        <button className=' bg-white text-black px-5 py-2 rounded w-full outline-none font-medium'>Add Note</button>
      </form>

      <div>
        <div className='h-32 w-32 bg-white rounded-2xl'>

        </div>
      </div>
    </div>
  )
}

export default App
