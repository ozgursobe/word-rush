import React, { useState } from 'react'
import { IoMdArrowBack } from 'react-icons/io'
import FAQ from './FAQ'

type HelpProps = {
    setHelpMenu : React.Dispatch<React.SetStateAction<boolean>>
}

const Help = ({setHelpMenu} : HelpProps) => {

  const faq = [{
    id : 1,
    question : "How do I increase my typing speed?",
    answer : "There are two ways to type faster: The best way to increase typing speed is to learn to type the correct way. “Touch typing” means you are able to type with all 10 fingers instead of using a “hunt and peck” method of typing. The second way you can learn to type faster is by playing typing games. 'Word Rush' can help you practice your typing speed and increase your words per minute score."
  },
  {
    id : 2,
    question : "What is the best 10-finger typing layout?",
    answer : "Of course, you should use ten fingers for typing, but you can start with a layout that’s the most comfortable for you. The small bumps on the F and J keys will help your fingers locate the correct position without looking. This setup should give you a full range of motion. The more you type, the faster you will get. There are a few alternative layouts that propose a more ergonomic approach to typing. You could also take the big leap and try out the Dvorak keyboard, but that’s a different story."
  },
  {
    id : 3,
    question : "Why is it important to take a typing speed test?",
    answer : "Taking a typing speed test establishes your average typing speed (WPM) and accuracy, which is an important baseline to know so you can increase speed and improve accuracy with practice. Periodically taking typing speed tests can help you track your progress and measure improvement. You even can use your WPM score from the typing test on your resume to highlight your administrative skills!"
  },
 
]

  return (
    <div className='relative z-20 w-72 sm:w-[550px] md:w-[660px] text-2xl sm:text-3xl  md:text-4xl  '>
       <h2>
        FAQs
       </h2>
       <IoMdArrowBack className='mt-8 text-5xl cursor-pointer' onClick={() => setHelpMenu(false) }/>
       <div>
        {faq.map(que => (
            <FAQ key={que.id} {...que}  />
        ) )}  
       </div>
    </div>
  )
}

export default Help