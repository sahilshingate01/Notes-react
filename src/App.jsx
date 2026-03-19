import React, { useState } from 'react'

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

        <button className=' bg-white text-black px-5 py-2 rounded w-full outline-none font-medium active:scale-95'>Add Note</button>

      </form>

      <div className=' lg:border-l-2 p-10 lg:w-1/2 '>

        <h1 className=' text-5xl font-bold'>Your Notes</h1>

        <div className='flex flex-wrap gap-5 mt-5 overflow-auto h-full'>
          {task.map((ele,idx) => {
            return <div key={idx} className='h-52 w-40 bg-white rounded-2xl'></div>
          })}
        </div>

      </div>
    </div>
  )
}

export default App
