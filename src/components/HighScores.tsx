import React, { useState } from 'react'
import ClassicHigh from './ClassicHigh'
import TimeHigh from './TimeHigh'
import {IoMdArrowBack} from "react-icons/io"

type HighScoreProps = {
    setHighScores :  React.Dispatch<React.SetStateAction<boolean>>
} 

const HighScores = ({ setHighScores } : HighScoreProps ) => {
    const [classicMode , setClassicMode ] = useState(true)
    const [timeMode , setTimeMode] = useState(false)

    return (
        <>
        <IoMdArrowBack className='mt-8 text-5xl cursor-pointer' onClick={() => setHighScores(false) }/>
        <div className='relative z-30 mt-12 w-72 sm:w-[600px] h-80 sm:h-[400px]  bg-indigo-200 text-black  border-2 border-white rounded-xl ' >
            <div className='flex h-24  border-y-2  border-white rounded-xl cursor-pointer text-xl sm:text-2xl  '>
                <div className={`w-1/2 border-r-2  border-white flex justify-center items-center ${classicMode &&`bg-indigo-300`  } `}  onClick={() => {
                    setClassicMode(true)
                    setTimeMode(false)
                } }>
                    Classic Mode
                </div>
                <div className={`w-1/2  rounded-xl flex justify-center items-center ${timeMode &&`bg-indigo-300`  }` }  onClick={() => {
                   setTimeMode(true)
                   setClassicMode(false)
                } }>
                    Time Mode
                </div>
            </div>
            {classicMode && <ClassicHigh /> }
            {timeMode && <TimeHigh />}

        </div>
        </>
    )
}

export default HighScores