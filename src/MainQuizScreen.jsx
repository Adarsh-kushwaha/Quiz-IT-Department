import React, {useState} from 'react'
import { QuizContext } from './Util/Context';
import StartScreen from "./Component/Quiz/QuizComponent/StartScreen"
import EndScreen from "./Component/Quiz/QuizComponent/EndScreen"
import Quiz from './Component/Quiz/Quiz';


const MainQuizScreen = () => {
    const[quizState, setQuizState] = useState("start");
    return (
        <>
        <QuizContext.Provider value={{quizState, setQuizState}}>
                {quizState === "start" && <StartScreen/>}
                {quizState === "quiz" && <Quiz/>}
                {quizState === "end" && <EndScreen/>}
                </QuizContext.Provider>
            {/* {setQuizState==="quiz" && <Quiz/>} */}
        </>
    )
}

export default MainQuizScreen
