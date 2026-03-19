import React, { useState } from 'react'
import { X } from 'lucide-react';

const App = () => {
  const [title, settitle] = useState('')
  const [detail, setdetail] = useState('')
  const [task, settask] = useState([])

  const formHandler = (e) => {
    e.preventDefault()

    const copytask = [...task];

    copytask.push({ title, detail })

    settask(copytask)
    console.log(copytask)
    settitle('')
    setdetail('')
  }
  function deleteNote(idx){
    const copytask = [...task]
    copytask.splice(idx,1)
    settask(copytask)
  }
  return (
    <div className=' h-screen bg-black lg:flex  text-white p-10 '>

      <form onSubmit={(e) => {
        formHandler(e)
      }} className='flex items-start flex-col p-10 gap-4 lg:w-1/2'>

        <h1 className=' text-5xl font-bold'>Add Notes</h1>

        {/* title input */}

        <input type="text"
          placeholder='Enter Task Heading'
          className=' px-5 py-2 border-2 rounded w-full outline-none font-medium'
          value={title}
          onChange={(e) => settitle(e.target.value)}
        />

        {/* short notes for heading */}

        <textarea type="text"
          placeholder='Enter Details '
          className=' px-5 py-2 border-2 rounded h-32 w-full outline-none flex flex-row font-medium'
          value={detail}
          onChange={(e) => { setdetail(e.target.value) }}
        />

        <button className=' bg-white text-black px-5 py-2 rounded w-full outline-none font-medium active:scale-95 cursor-pointer'>Add Note</button>

      </form>

      <div className=' lg:border-l-2 p-10 lg:w-1/2 '>

        <h1 className=' text-5xl font-bold'>Your Notes</h1>

        <div className='flex flex-wrap gap-5 mt-5 overflow-auto h-full justify-start '>
          {task.map((ele, idx) => {
            return <div key={idx} className=' flex justify-between flex-col items-start h-52 w-40 relative rounded-2xl p-2 bg-[url("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7qMZEJSG6vy2aOHZ7uuSF75vX7cOAgTl3sQ&s")] bg-cover'>
              <h2 className='text-3xl text-black font-bold mt-2'> {ele.title} </h2>
              <p className='text-xl text-gray-700 mb-16'>{ele.detail}</p>
              <button onClick={() => {
                deleteNote(idx)
              }} className='bg-red-500 w-full text-white font-bold rounded active:scale-95 cursor-pointer '>Delete</button>
            </div>
          })}
        </div>

      </div>
    </div>
  )
}

export default App
