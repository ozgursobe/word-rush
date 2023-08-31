import React, { useEffect, useState } from 'react'

const ClassicHigh = () => {

  const [highLevel , setHighLevel] = useState(1)
  const [highScore , setHighScore ] = useState(0)

  useEffect(() => {
     if(localStorage.getItem("classic_best_level")) {
        setHighLevel(parseInt(localStorage.getItem("classic_best_level") as string))
     }
   
     if(localStorage.getItem("classic_best_score")) {
        setHighScore(parseInt(localStorage.getItem("classic_best_score") as string))
     }
    
  
  }, [])

  return (
    <div className='mt-16 text-white text-xl sm:text-3xl flex flex-col gap-5'>
        <div className='text-zinc-500'> 
           High Level : <span className='text-lime-600'> {highLevel} </span> 
        </div>
        <div className='text-zinc-500'>
           High Score : <span className='text-lime-600'> {highScore} </span> 
        </div>     
    </div>
  )
}

export default ClassicHigh