import React, { SetStateAction, useEffect, useState } from 'react'
import {IoReloadSharp} from "react-icons/io5"; 
import {AiOutlineHome} from "react-icons/ai"


type WordProps = {
  word : string,
  position : number
}

type ClassicProps = {
  start : boolean,
  game : boolean,
  inputRef : React.MutableRefObject<HTMLInputElement>,
  setFirstWord : React.Dispatch<React.SetStateAction<WordProps>>,
  setSecondWord : React.Dispatch<React.SetStateAction<WordProps>>,
  setThirdWord : React.Dispatch<React.SetStateAction<WordProps>>,
  score : number,
  firstWord : WordProps,
  secondWord : WordProps,
  thirdWord : WordProps
  setGame : React.Dispatch<React.SetStateAction<boolean>> ,
  disabled : boolean,
  setDisabled : React.Dispatch<React.SetStateAction<boolean>>,
  input : string,
  setInput : React.Dispatch<React.SetStateAction<string>>,
  startCounter : number
  restartGame : () => void,
  small_board : number,
  big_board : number,
  changeWords : (word: string) => void,
  setPlay : React.Dispatch<SetStateAction<boolean>>,
  setClassic : React.Dispatch<SetStateAction<boolean>>
}


const Classic = ({  start,  game , inputRef , setFirstWord , setSecondWord , setThirdWord , score, firstWord , secondWord , thirdWord , setGame , disabled, setDisabled , input, setInput , startCounter,   restartGame, small_board,  big_board , changeWords , setPlay , setClassic } : ClassicProps) => {
 
  const [level , setLevel ] = useState(1)
  const [speed , setSpeed] = useState(7)
  const [heart , setHeart] = useState(3)
  const [classicBestScore , setClassicBestScore ] = useState(0)
  const [classicBestLevel , setClassicBestLevel ] = useState(1)

  console.log(window.innerWidth)


  useEffect(() => {

    if(localStorage.getItem("classic_best_score")) {
     setClassicBestScore( parseInt(localStorage.getItem("classic_best_score") as string) )
    }
    if(localStorage.getItem("classic_best_level")) {
      setClassicBestLevel( parseInt(localStorage.getItem("classic_best_level") as string) )
     }     

   }, [])
    
   const setMissedWords = () => {
    setHeart(prev => prev - 1)
    setInput("")
   }

   
    useEffect(() => {
      let board : number
      if(window.innerWidth >= 640) {
        board = big_board
      }
      else {
        board = small_board
      }
      if(firstWord.position >= board) {
        changeWords("firstWord")
        setMissedWords()
      }
      if(secondWord.position >= board) {
        changeWords("secondWord")
        setMissedWords()
      }
      if(thirdWord.position >= board) {
        changeWords("thirdWord")
        setMissedWords()
      }
      
    }, [firstWord.position , secondWord.position , thirdWord.position])  


  useEffect(() => {
    setLevel(Math.floor(score/10) + 1)
    
  }, [score])

  useEffect(() => {
   
    setSpeed(prev =>  7 + ((level-1) * 2) )
  }, [level])

  
  useEffect(() => {
    let Timeout_1 : NodeJS.Timer
    let Timeout_2 : NodeJS.Timer
    let Timeout_3 : NodeJS.Timer


    if(start && game) {
       inputRef.current.focus()
       Timeout_1 = setTimeout(() => {
        setFirstWord(prev => (
          {
            ...prev,
            position : prev.position + speed
           }
        ) )
       
       }, 100)
  
       
        Timeout_2 = setTimeout(() => {
         
          setSecondWord(prev => (
            {
              ...prev,
              position : prev.position + speed
             }
          ) )
         
         }, 100)
  
       
  
       
        Timeout_3 = setTimeout(() => {
         
          setThirdWord(prev => (
            {
              ...prev,
              position : prev.position + speed
             }
          ) )
         
         }, 100)
  
       
    }

    return () => {
      clearTimeout(Timeout_1)
      clearTimeout(Timeout_2)
      clearTimeout(Timeout_3)

    }
    
   }, [start, game, firstWord.position, secondWord.position, thirdWord.position ])   


  useEffect(() => {
    if(heart === 0) {
      setGame(false)
      setDisabled(true)
      if(!classicBestScore ) {
        localStorage.setItem("classic_best_score" , score.toString() )
        setClassicBestScore(parseInt(localStorage.getItem("classic_best_score") as string ))
      }
      else if(score > classicBestScore) {
        localStorage.setItem("classic_best_score" , score.toString() )
        setClassicBestScore(parseInt(localStorage.getItem("classic_best_score") as string ))
      }
      if(!classicBestLevel ) {
        localStorage.setItem("classic_best_level" , level.toString() )
        setClassicBestLevel(parseInt(localStorage.getItem("classic_best_level") as string ))
      }
      else if(level > classicBestLevel) {
        localStorage.setItem("classic_best_level" , level.toString() )
        setClassicBestLevel(parseInt(localStorage.getItem("classic_best_level") as string ))
      }
      
    } 
   }, [heart])



  return (
    <>
    <div className='mt-10 flex justify-between gap-4'>
      <div className='flex text-2xl sm:text-4xl ml-4 gap-3 sm:gap-12'>
        <div>
          Level : {level}
        </div>
      <div>
         Score : {score}
      </div>
       
      </div>
      <div className='flex gap-3'>
        { heart >= 1 ? <img className='w-6 sm:w-10   ' src="./img/heart.png" alt="" />  :  <img className='w-6 sm:w-10   ' src="./img/empty_heart.png" alt="" /> }  
        { heart >= 2 ? <img className='w-6 sm:w-10  ' src="./img/heart.png" alt="" /> :  <img className='w-6 sm:w-10   ' src="./img/empty_heart.png" alt="" />  }  
        { heart === 3 ? <img className='w-6 sm:w-10 ' src="./img/heart.png" alt="" /> : <img className='w-6 sm:w-10   ' src="./img/empty_heart.png" alt="" />  }  

      </div>
      </div>

      <div className='relative w-80 sm:w-[550px] md:w-[700px] lg:w-[800px] h-[480px]  sm:h-[630px] bg-white text-sky-600 text-lg sm:text-2xl md:text-3xl mt-8 mx-auto border-4 rounded  '>
            
          { !start ? <div className=' text-black text-5xl flex justify-center mt-64 '>  {startCounter} </div>  : <>

           <div className='h-full grid grid-flow-col grid-cols-3'>

            <div className=' border-2 flex justify-center'>
              <div className='relative ' style={ { top : `${firstWord.position}px` } }>
               { firstWord.word }
              </div>
            </div>

         <div className='border-2 flex justify-center'>
            <div className='relative  ' style={ { top : `${secondWord.position}px` } }>
               { secondWord.word }
            </div>
            {!game && <div className='border-4 border-amber-900 bg-orange-200 w-56 h-56 sm:w-72 sm:h-72 rounded-xl absolute z-20 top-32 flex flex-col justify-center items-center text-lg sm:text-2xl pt-2 sm:pt-4 gap-3 text-black '>
               
                 <div>Level : {level} </div>
                 <div> Score : {score} </div>
                 <div> High Level : {classicBestLevel} </div>
                 <div> High Score : {classicBestScore} </div>
                
                
              
                <span className='mt-1 text-3xl sm:text-4xl flex justify-around items-center gap-6'>
                  <AiOutlineHome className='cursor-pointer' onClick={() => {
                    setPlay(false)
                    setClassic(false)
                  }} />
                 < IoReloadSharp className='cursor-pointer' onClick={() => {
                  restartGame()
                  setHeart(3)
                } } /> </span>
               
            </div> }
         </div>
           
          <div className='border-2 flex justify-center '>
             <div className='relative  ' style={ { top : `${thirdWord.position}px` } }>
               { thirdWord.word }
             </div>
          </div>
            </div> 
            
           </>  } 

         
            
            
         </div>
        <div>
          <input ref = {inputRef} type="text" className=' block w-80 sm:w-[550px] md:w-[700px] lg:w-[800px] text-sky-600 h-16 mt-4 mx-auto border-2 border-neutral-400 rounded-xl text-lg sm:text-2xl pl-2 ' value= {input} disabled = {disabled} placeholder = "Hurry Up !!" onChange={e => {
               setInput(e.target.value)
          } } />
        </div>
      
     
   
 
   
</>
  )
}

export default Classic