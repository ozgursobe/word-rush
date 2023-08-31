import React, { useEffect, useState } from 'react'

const TimeHigh = () => {

    const [highScore , setHighScore] = useState(0)
  
    useEffect(() => {
      if(localStorage.getItem("time_best")) {
        setHighScore(parseInt(localStorage.getItem("time_best") as string))
      }
    }, [])

  return (
    <div className='mt-24 text-zinc-500 text-xl sm:text-3xl'>
        High Score : <span className='text-lime-600'> {highScore} </span> 
    </div>
  )
}

export default TimeHigh