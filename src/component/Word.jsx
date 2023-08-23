import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from 'react';
import '../asset/css/Word.css'


const Word = () => {

    // ##############       ADD ONE      ######################
    // const [count, setCount] = useState(0)
    // const [red, setRed] = useState('red')

    // const Inc = () => {
    //     setCount(count + 1);
    //     // setRed(red)
    // }

    // ##############       WORD COUNTER       ######################
    const [word, setWord] = useState(0)
    const [char, setChar] = useState(0)

    const handlechange = (event) => {
        setWord(event.target.value.split(' ').filter((x)=>x.length !== 0).length)
        setChar(event.target.value.split('').filter((x)=>x !== ' ').length)
    }

  return (
    <>
        <div class="container">
            {/* <h1 >{count}</h1> 
            <button onClick={Inc}>click</button> */}

            {/* ###############   */}
            <h1 class="text-center">Word Counter</h1>
            <textarea name="text" id="" cols="30" rows="10" onChange={handlechange}></textarea>
            <h1 class="text-center"><span> {word} Word</span> <span class="ms-4">{char} charchter</span></h1>
        </div>

    </>
  )
}

export default Word