import React, { useState } from 'react'
import {IoIosArrowDown} from "react-icons/io"
import {IoIosArrowUp} from "react-icons/io"


type FAQProps = {
    id : number,
    question : string,
    answer : string
}

const FAQ = ({id , question , answer } : FAQProps) => {
  
    const [isDetail , setIsDetails] = useState(false)

  return (
    <div className=' mt-16  text-xl sm:text-2xl md:text-3xl'>
        <div className= 'flex justify-between items-center cursor-pointer'  onClick={() => setIsDetails(prev => !prev)}>

          <div className={`text-left  hover:text-yellow-200 ${isDetail && `text-yellow-300` } `} > {question} </div>
          { !isDetail ?  <IoIosArrowDown className='text-3xl'  /> : <IoIosArrowUp className='text-3xl' /> }

        </div>
        {isDetail &&  <div className='mt-4 text-xl sm:text-2xl text-left leading-9 indent-3'> {answer} </div> }
      <hr className='mt-6  w-full h-1 bg-slate-400' />
    </div>

   
  )
}

export default FAQ