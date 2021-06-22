import React, { useState, useCallback } from 'react'
import { useParams } from 'react-router'
import CollectData from './CollectData';
import QuizHeader from './QuizHeader';
import useStyles from './Styles';
import { CssBaseline, Grid, Paper, Container, Typography, Button, Radio, FormControlLabel, RadioGroup, ThemeProvider, Box } from "@material-ui/core"
import axios from 'axios';
import axiosInstance from '../Axios';


const Quiz = () => {
    const { id } = useParams();
    const API_URL = "http://52.172.164.179:8090/test/" + id;
    const [dataState] = CollectData(API_URL)
    // console.log(dataState);
    const classes = useStyles();
    const [currentQuestion, setCurrentQuestion] = useState(0)
    const [optionChoosen, setOptionChoosen] = useState("");
    const [score, setScore] = useState(0);
    const api = "http://52.172.164.179:8090"
    const getToken = localStorage.getItem("access_token");
    console.log(getToken)


    const handleChange = (event) => {
        setOptionChoosen(event.target.value);
    };

    const prevQuestion = () => {

        if (dataState.data.questions[currentQuestion].answer === optionChoosen) {

        }
        setCurrentQuestion(currentQuestion - 1)

    }

    const nextQuestion = () => {
        if (dataState.data.questions[currentQuestion].answer === optionChoosen) {
            setScore((score + dataState.data.questions[currentQuestion].marks))

        }

        setCurrentQuestion(currentQuestion + 1)
    }

    const resetAnswer = () => {
        setOptionChoosen(null)
    }

    const finishQuiz = () => {

        if (dataState.data.questions[currentQuestion].answer === optionChoosen) {
            setScore((score + 1) * (dataState.data.questions[currentQuestion].marks))

        }

        console.log(score)

        // 
        axiosInstance.post(`result`, {
            body:{
                quiz : {id},
                marks:{score}
            },
            header:{
                "bearer token": {getToken}
            }
            
        }).then((resolve) => {
            console.log(resolve)
        })


    }

















    return (

        <React.Fragment>


            <CssBaseline />
            <QuizHeader title={dataState.data.title} />
            <ThemeProvider>

                <div className={classes.root}>
                    <Container className={classes.quizContainer} >
                        <Grid container spacing={4}>
                            <Grid item xs={12} sm={9}>
                                <Paper className={classes.paper}>
                                    <Typography variant="h5" gutterBottom>
                                        Question {currentQuestion + 1}
                                    </Typography>

                                    <Typography variant="h6" gutterBottom>
                                        {dataState.data.questions ? dataState.data.questions[currentQuestion].title : null}

                                    </Typography>
                                    <div>

                                        <RadioGroup aria-label="" name="" value={optionChoosen} onChange={handleChange}>
                                            <FormControlLabel value="option_a" control={<Radio />} label={dataState.data.questions ? dataState.data.questions[currentQuestion].options.option_a : null} />
                                            <FormControlLabel value="option_b" control={<Radio />} label={dataState.data.questions ? dataState.data.questions[currentQuestion].options.option_b : null} />
                                            <FormControlLabel value="option_c" control={<Radio />} label={dataState.data.questions ? dataState.data.questions[currentQuestion].options.option_c : null} />
                                            <FormControlLabel value="option_d" control={<Radio />} label={dataState.data.questions ? dataState.data.questions[currentQuestion].options.option_d : null} />

                                        </RadioGroup>
                                        <Grid container spacing={3}>
                                            <Grid item xs={6}>
                                                {currentQuestion === 0 ? (<Button className={classes.quizBtn} variant="contained" disabled onClick={prevQuestion}>
                                                    Previous
                                                </Button>) : (<Button className={classes.quizBtn} variant="contained" color="primary" onClick={prevQuestion}>
                                                    Previous
                                                </Button>)}

                                            </Grid>
                                            <Grid item xs={6}>
                                                <Box display="flex" justifyContent="flex-end" alignItems="center">
                                                    <Button className={classes.quizBtn} variant="contained" color="primary" onClick={resetAnswer}>
                                                        Reset
                                                    </Button>

                                                    {currentQuestion === (dataState.data.questions ? dataState.data.questions.length : null) - 1 ? (<Button className={classes.quizBtn} variant="contained" color="secondary" onClick={finishQuiz}>
                                                        Finish Now
                                                    </Button>) : (<Button className={classes.quizBtn} variant="contained" color="primary" onClick={nextQuestion}>
                                                        Submit & Next
                                                    </Button>)}

                                                </Box>
                                            </Grid>
                                        </Grid>



                                    </div>

                                </Paper>
                            </Grid>
                            <Grid item xs={12} sm={3}>
                                <Paper className={classes.paper}>
                                    {/* for(let i=0 ; i < dataState.data.question.length ;  i++){
                                        <Grid container spacing={2}>

                                            <Grid item xs={12} sm={4}>
                                                <Paper className={classes.paper}>1</Paper>
                                            </Grid>
                                        </Grid>
                                    } */}
                                    <Grid container spacing={2}>

                                        <Grid item xs={12} sm={4}>
                                            <Paper className={classes.paper}>1</Paper>
                                        </Grid>
                                        <Grid item xs={12} sm={4}>
                                            <Paper className={classes.paper}>1</Paper>
                                        </Grid>
                                        <Grid item xs={12} sm={4}>
                                            <Paper className={classes.paper}>1</Paper>
                                        </Grid>
                                        <Grid item xs={12} sm={4}>
                                            <Paper className={classes.paper}>1</Paper>
                                        </Grid>
                                    </Grid>
                                </Paper>
                            </Grid>

                        </Grid>
                    </Container>
                </div>


            </ThemeProvider>


        </React.Fragment>
    )


}

export default Quiz
