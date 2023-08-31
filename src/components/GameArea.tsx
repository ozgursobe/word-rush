import React, { SetStateAction, useEffect, useRef, useState } from 'react'
import Time from './Time'
import {IoReloadSharp} from "react-icons/io5"; 
import Classic from './Classic';

type GameProps = {
  classic : boolean, 
  time : boolean,
  setPlay : React.Dispatch<SetStateAction<boolean>>,
  setClassic : React.Dispatch<SetStateAction<boolean>>,
  setTime : React.Dispatch<SetStateAction<boolean>>
}


const GameArea = ({classic , time, setPlay , setClassic,  setTime} : GameProps ) => {
  
    const [input , setInput ] = useState("")

    const [game , setGame ] = useState(true)

    const inputRef = useRef<HTMLInputElement>(null!)

    const [startCounter , setStartCounter ] = useState(3)

    const [start , setStart ] = useState(false)

    const [gameCounter , setGameCounter] = useState(60)

    const [score , setScore] = useState(0)


    let [disabled , setDisabled ] = useState(true)

    const small_board = 450
    const big_board = 600

    const originalList = [
      "time", "year", "people", "way", "day", "man", "thing", "woman", "life", "child",
      "world", "school", "state", "family", "student", "group", "country", "problem", "hand", "part",
      "place", "case", "week", "company", "system", "program", "question", "work", "government", "number",
      "night", "point", "home", "water", "room", "mother", "area", "money", "story", "fact", "month",
      "lot", "right", "study", "book", "eye", "job", "length", "business", "issue", "side", "kind",
      "head", "house", "service", "friend", "father", "power", "hour", "game", "line", "end",
      "member", "law", "car", "city", "community", "name", "president", "team", "minute", "idea",
      "kid", "body", "information", "back", "parent", "face", "others", "level", "office", "door",
      "health", "person", "art", "war", "history", "party", "result", "change", "morning", "reason", "research", "girl", "guy", "moment", "air", "teacher", "force", "education", "future", "century", "evidence", "player", "project", "meeting", "government",  "food",  "weekend", "internet", "experience",   "music", "language",  "example",  "map"]

    let [wordList, setWordList] = useState<string[]>(originalList) 

    const [firstWord , setFirstWord] = useState({
      word : "amazing",
      position : 0
    }) 
    const [secondWord , setSecondWord] = useState({
      word : "word",
      position : 0
    }) 
    const [thirdWord , setThirdWord] = useState({
      word : "rush",
      position : 0
    }) 

    const restartGame = () => {
      setFirstWord({
        word : "amazing",
        position : 0
      })
      setSecondWord({
        word : "word",
        position : 0
      })
      setThirdWord({
        word : "rush",
        position : 0
      })
      setGame(true)
      setDisabled(false)
      setStart(false)
      setStartCounter(3)
      setScore(0)
      setWordList(originalList)
      setInput("")

    }


    const changeWords = (word : string) => {
      let choosenWord : string
      if(wordList.length > 0) {
        choosenWord = wordList[Math.floor(Math.random() * wordList.length)] 
      }
      else {
        choosenWord = ""
      }

        switch(word) {
          case "firstWord" :
            setFirstWord(() => (
               {
                word : choosenWord,
                position : 0
              }
            )
            
            ) 
            setWordList(wordList.filter(word => word !== choosenWord)) 
            break;

          case "secondWord" :
            setSecondWord(() => (
              {
               word : choosenWord,
               position : 0
             }
           )) 
            setWordList(wordList.filter(word => word !== choosenWord)) 
            break;

          case "thirdWord" :
              setThirdWord(() => (
                {
                 word : choosenWord,
                 position : 0
               }
             )) 
              setWordList(wordList.filter(word => word !== choosenWord)) 
              break;
  
        }
       
    }


   useEffect(() => {
     if(startCounter > 0) {
      setTimeout(() => {
        setStartCounter(prev => prev - 1)
      },1000)
    
     }
     if(startCounter === 0) {
      setStart(true)
      setDisabled(false)
     }
   }, [startCounter])

  

   
 

    const updateCorrect = () => {
      if(input === firstWord.word) {
        setScore(prev => prev + 1)
        changeWords("firstWord")
        setInput("")
       }
       else if(input === secondWord.word) {
        setScore(prev => prev + 1)
        changeWords("secondWord")
        setInput("")
       }
       else if(input === thirdWord.word) {
        setScore(prev => prev + 1)
        changeWords("thirdWord")
        setInput("")
       }
    }

    
    
    useEffect(() => {
      updateCorrect()
    }, [input])

     


  return (
    <div>
       

        
          { time &&  <Time gameCounter={gameCounter} score = {score} start = {start}  game = {game} setGame = {setGame} setGameCounter = {setGameCounter} disabled = {disabled}  setDisabled = {setDisabled} inputRef = {inputRef} setFirstWord = {setFirstWord} setSecondWord = {setSecondWord} setThirdWord = {setThirdWord} firstWord = {firstWord} secondWord = {secondWord} thirdWord = {thirdWord} startCounter = {startCounter} input = {input} setInput = {setInput} restartGame = {restartGame} setPlay = {setPlay} setTime = {setTime} small_board = {small_board} big_board = {big_board} changeWords = {changeWords} />  }

          { classic && <Classic start={start}  game = {game} inputRef = {inputRef} setFirstWord = {setFirstWord} setSecondWord = {setSecondWord} setThirdWord = {setThirdWord} score = {score} firstWord = {firstWord} secondWord = {secondWord} thirdWord = {thirdWord} setGame = {setGame}  disabled = {disabled} setDisabled = {setDisabled} input = {input} setInput = {setInput} startCounter = {startCounter} restartGame = {restartGame} small_board = {small_board} big_board = {big_board} changeWords = {changeWords} setPlay = {setPlay} setClassic = {setClassic} />}
          
          
       


      
    </div>
  )
}

export default GameArea