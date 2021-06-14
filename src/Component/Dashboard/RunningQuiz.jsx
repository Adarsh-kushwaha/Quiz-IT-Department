import React from 'react';
// import Link from '@material-ui/core/Link';
// import { makeStyles } from '@material-ui/core/styles';
import {Typography, Button }from '@material-ui/core';
// import Title from './Title';



// const useStyles = makeStyles({
//   depositContext: {
//     flex: 1,
//   },
// });

export default function RunningQuiz() {
//   const classes = useStyles();
  return (
    <React.Fragment>
      <Typography component="h2" variant="h6" color="primary" gutterBottom>
        Data Structure
     </Typography>
      {/* <Title>Recent Deposits</Title> */}
      <Typography component="p" variant="subtitle1">
        Scheduled On 24 August 2020
      </Typography>
      <Typography component="p" variant="subtitle1">
        Scheduled Time 11:00 AM IST
      </Typography>
      <Typography component="p" variant="subtitle1" gutterBottom>
        Time Limit 3:00 Hour
      </Typography>
      
      <div>
      <Button variant="contained" color="primary">
        Attempt Now
    </Button>
      </div>
    </React.Fragment>
  );
}