import React, { SetStateAction, useEffect, useState } from 'react'
import {IoReloadSharp} from "react-icons/io5"; 
import {AiOutlineHome} from "react-icons/ai"


type WordProps = {
    word : string,
    position : number
}

type TimeProps = {
    gameCounter : number,
    score : number,
    start : boolean,
    game : boolean
    setGame : React.Dispatch<React.SetStateAction<boolean>> ,
    setGameCounter :React.Dispatch<React.SetStateAction<number>> ,
    disabled : boolean,
    setDisabled : React.Dispatch<React.SetStateAction<boolean>>,
    inputRef : React.MutableRefObject<HTMLInputElement>,
    setFirstWord : React.Dispatch<React.SetStateAction<WordProps>>,
    setSecondWord : React.Dispatch<React.SetStateAction<WordProps>>,
    setThirdWord : React.Dispatch<React.SetStateAction<WordProps>>,
    firstWord : WordProps,
    secondWord : WordProps,
    thirdWord : WordProps,
    startCounter : number,
    input : string,
    setInput : React.Dispatch<React.SetStateAction<string>>,
    restartGame : () => void
    setPlay : React.Dispatch<SetStateAction<boolean>>,
    setTime : React.Dispatch<SetStateAction<boolean>>,
    small_board : number,
    big_board : number,
    changeWords : (word: string) => void,
}

const Time = ({gameCounter , score , start,   game , setGame , setGameCounter , disabled, setDisabled , inputRef, setFirstWord , setSecondWord , setThirdWord, firstWord , secondWord , thirdWord , startCounter, input , setInput , restartGame, setPlay , setTime , small_board , big_board , changeWords } : TimeProps) => {

 
  const [timeBest , setTimeBest] = useState(0)
  let speed : number

    
    useEffect(() => {

        if(localStorage.getItem("time_best")) {
         setTimeBest( parseInt(localStorage.getItem("time_best") as string) )
        }     

       }, [])

       useEffect(() => {
        if(start  && gameCounter > 0) {
          setTimeout(() => {
            setGameCounter(prev => prev - 1)
          },1000)
        } 
        if(gameCounter === 0 ) {
          setGame(false)
          setDisabled(true)
          if(!timeBest ) {
            localStorage.setItem("time_best" , score.toString() )
            setTimeBest(parseInt(localStorage.getItem("time_best") as string ))
          }
          else if(score > timeBest) {
            localStorage.setItem("time_best" , score.toString() )
            setTimeBest(parseInt(localStorage.getItem("time_best") as string ))
          }
          
         
          
        } 
    
       }, [start , gameCounter])   

       useEffect(() => {
        let interval_1 : NodeJS.Timer
        let interval_2 : NodeJS.Timer
        let interval_3 : NodeJS.Timer
    
    
        if(start && game) {
          if(window.innerWidth >= 640) {
            speed = 7
          }
          else {
            speed = 5
          }
          console.log(speed)
           inputRef.current.focus()
           interval_1 = setInterval(() => {
            setFirstWord(prev => (
              {
                ...prev,
                position : prev.position + speed
               }
            ) )
           
           }, 100)
      
           setTimeout(() => {
            interval_2 = setInterval(() => {
             
              setSecondWord(prev => (
                {
                  ...prev,
                  position : prev.position + speed
                 }
              ) )
             
             }, 100)
      
           },100)
      
           setTimeout(() => {
            interval_3 = setInterval(() => {
             
              setThirdWord(prev => (
                {
                  ...prev,
                  position : prev.position + speed
                 }
              ) )
             
             }, 100)
      
           },200)
        }
    
        return () => {
          clearInterval(interval_1)
          clearInterval(interval_2)
          clearInterval(interval_3)
    
        }
        
       }, [start, game])  
       
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
         
        }
        if(secondWord.position >= board) {
          changeWords("secondWord")
          
        }
        if(thirdWord.position >= board) {
          changeWords("thirdWord")
           
        }
        
      }, [firstWord.position , secondWord.position , thirdWord.position]) 


    return (
        <>
            <div className='w-80 sm:w-[550px] md:w-[700px] lg:w-[800px] flex items-center mx-auto gap-2 border-2 bg-slate-400 rounded-xl '>
                <meter className='w-64 sm:w-[500px] md:w-[650px] lg:w-[7500px] pl-2 h-12 text-sky-600 text-4xl  '
                    min="0" max="60" low={20} high={40} optimum={50} value={gameCounter} > </meter>
                <div className='text-xl text-black mr-1'> {gameCounter} </div>
            </div>
            <div className='text-3xl mt-6'>
                Score : {score}
            </div>

            <div className='relative  w-80 sm:w-[550px] md:w-[700px] lg:w-[800px]  h-[480px]  sm:h-[630px] bg-white text-sky-600 text-lg sm:text-2xl md:text-3xl mt-8 mx-auto border-4 rounded  '>
            
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
            {!game && <div className='border-4 border-amber-900 bg-orange-200 w-56 h-56 sm:w-72 sm:h-72 rounded-xl absolute z-20 top-32 flex flex-col justify-center items-center text-2xl pt-4 gap-3 text-black '>
               
                 
                  <div> Score : {score} </div>
                  <div> High Score : {timeBest} </div>
                
              
                <span className='mt-3 text-4xl flex justify-around items-center gap-6'>
                <AiOutlineHome className='cursor-pointer' onClick={() => {
                    setPlay(false)
                    setTime(false)
                  }} />
                   < IoReloadSharp className='cursor-pointer' onClick={() => {
                  setGameCounter(60)
                  restartGame()
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
          <input ref = {inputRef} type="text" className='block  w-80 sm:w-[550px] md:w-[700px] lg:w-[800px] text-sky-600 h-16 mt-4 mx-auto border-2 border-neutral-400 rounded-xl text-lg sm:text-2xl pl-2 ' value= {input} disabled = {disabled} placeholder = "Hurry Up !!" onChange={e => {
               setInput(e.target.value)
          } } />
        </div>
        </>
    )
}

export default Time