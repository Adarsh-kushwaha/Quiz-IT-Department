import React from 'react';
import {Typography, Button }from '@material-ui/core';
import CollectData from '../Quiz/CollectData';



export default function RunningQuiz() {
//   const classes = useStyles();
const API_URL = "http://52.172.164.179:8090/test/1"
const [dataState] = CollectData(API_URL)
console.log(dataState);

  return (
    <React.Fragment>
      <Typography component="h2" variant="h6" color="primary" gutterBottom>
        {dataState.data.title}
     </Typography>
      {/* <Title>Running Quiz Card</Title> */}
      <Typography component="p" variant="subtitle1">
       No Of Question : {dataState.data.questions ? dataState.data.questions.length: null}
      </Typography>
      
      <Typography component="p" variant="subtitle1">
        Starting Time : {dataState.data.starting_time}
      </Typography>
      <Typography component="p" variant="subtitle1" gutterBottom>
        Ending Time : {dataState.data.starting_time}
      </Typography>
      
      <div>
      <Button variant="contained" color="primary">
        Attempt Now
    </Button>
      </div>
    </React.Fragment>
  );
}