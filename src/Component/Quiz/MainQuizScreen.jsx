import React, {useState} from 'react'
import Quiz from './Quiz'

const MainQuizScreen = () => {
    const[quizState, setQuizState]= useState("quiz")
    return (
        <>
            {setQuizState==="quiz" && <Quiz/>}
        </>
    )
}

export default MainQuizScreen
