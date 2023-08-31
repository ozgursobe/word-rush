import React, { useState } from 'react'
import GameArea from './GameArea'
import HighScores from './HighScores'
import { IoMdArrowBack } from 'react-icons/io'
import Help from './Help'

const Body = () => {

  const [menu, setMenu] = useState(false)
  const [play, setPlay] = useState(false)
  const [highScores, setHighScores] = useState(false)
  const [helpMenu , setHelpMenu] =  useState(false)
  const [classic, setClassic] = useState(false)
  const [time, setTime] = useState(false)
  return (


    <div>


      <div className=' flex justify-between relative'  >



        <div className='text-white'>
          <div className='word absolute left-80 top-32 w-12 h-12 rounded-full flex justify-center items-center  text-2xl'>A</div>
          <div className='word absolute left-14 top-64 w-12 h-12 rounded-full flex justify-center items-center  text-2xl'>L</div>
          <div className='word absolute left-80 top-96 w-12 h-12 rounded-full flex justify-center items-center  text-2xl'>C</div>
          <div className='word absolute left-32 top-80 w-12 h-12 rounded-full flex justify-center items-center  text-2xl'>F</div>
          <div className='word absolute left-48 top-24 w-12 h-12 rounded-full flex justify-center items-center  text-2xl'>O</div>
          <div className='word absolute left-80 top-[610px] w-12 h-12 rounded-full flex justify-center items-center  text-2xl'>R</div>
          <div className='word absolute left-14 top-[580px] w-12 h-12 rounded-full flex justify-center items-center  text-2xl'>Z</div>
          <div className='word absolute left-48 top-[670px] w-12 h-12 rounded-full flex justify-center items-center  text-2xl'>N</div>
        </div>




        <div className='relative'>


          {!play && !menu && !highScores && !helpMenu && <> <div className='flex flex-col items-center'>
            <h2 className='mt-12 sm:w-[500px] mx-auto text-3xl sm:text-5xl font-serif  text-white '>Test your typing skills</h2> <div className='relative z-20 mt-24  w-56 h-16 border-2 text-3xl border-black bg-white text-sky-600 rounded-xl flex justify-center items-center cursor-pointer' onClick={() => setMenu(true)}>
              Play
            </div>
            <div className='relative z-20 mt-12 w-56 h-16 border-2 text-3xl border-black bg-white text-sky-600 rounded-xl flex justify-center items-center cursor-pointer' onClick={() => setHighScores(true)}>
              High Scores
            </div>
            <div className='relative z-20 mt-12  w-56 h-16 border-2 text-3xl border-black bg-white text-sky-600 rounded-xl flex justify-center items-center cursor-pointer' onClick={() => setHelpMenu(true)}>
              Help
            </div>  </div>
            <div className='text-white'>
         
         
          <div className='word absolute left-12 top-[550px] w-12 h-12 rounded-full flex justify-center items-center  text-2xl'>D</div>
          <div className='word absolute left-80 top-[640px] w-12 h-12 rounded-full flex justify-center items-center  text-2xl'>V</div>
          <div className='word absolute left-48 top-[670px] w-12 h-12 rounded-full flex justify-center items-center  text-2xl'>S</div>
        </div> </>}

          {menu && <> <div className='flex flex-col items-center'>
            <h2 className='mt-12 sm:w-[500px] mx-auto text-3xl sm:text-5xl text-white font-serif'>Test your typing skills</h2>

            <div className='mt-24'>
              <IoMdArrowBack className=' text-5xl cursor-pointer  ' onClick={() => setMenu(false)} />

              <div className='relative z-20 mt-12 w-56 h-16 border-2 text-3xl border-black bg-white text-sky-600 rounded-xl flex justify-center items-center cursor-pointer' onClick={() => {
                setPlay(true)
                setMenu(false)
                setClassic(true)
              }}>
                Classic
              </div>
              <div className='relative z-20 mt-12  w-56 h-16 border-2 text-3xl border-black bg-white text-sky-600 rounded-xl flex justify-center items-center cursor-pointer' onClick={() => {
                setPlay(true)
                setMenu(false)
                setTime(true)
              }}>
                Time
              </div>
            </div>

          </div> </>}
          {play && <GameArea classic={classic} time={time} setPlay = {setPlay} setClassic = {setClassic} setTime = {setTime} />}
          {highScores && <HighScores setHighScores={setHighScores} />}
          {helpMenu && <Help setHelpMenu={setHelpMenu} /> } 

        </div>




        <div>
          <div className='word absolute right-24 top-80 w-12 h-12 rounded-full flex justify-center items-center  text-2xl '>K</div>

          <div className='word absolute right-36 top-64 w-12 h-12 rounded-full flex justify-center items-center  text-2xl'>M</div>

          <div className='word absolute right-32 top-20 w-12 h-12 rounded-full flex justify-center items-center  text-2xl'>E</div>

          <div className='word absolute right-80 top-96 w-12 h-12 rounded-full flex justify-center items-center  text-2xl'>Y</div>
          <div className='word absolute right-64 top-40 w-12 h-12 rounded-full flex justify-center items-center  text-2xl'>G</div>
          <div className='word absolute right-12 top-[550px] w-12 h-12 rounded-full flex justify-center items-center  text-2xl'>B</div>
          <div className='word absolute right-80 top-[640px] w-12 h-12 rounded-full flex justify-center items-center  text-2xl'>H</div>
          <div className='word absolute right-48 top-[670px] w-12 h-12 rounded-full flex justify-center items-center  text-2xl'>U</div>
          
        </div>
        



      </div>
    </div>



  )
}

export default Body