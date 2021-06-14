import React from 'react';
// import Link from '@material-ui/core/Link';
// import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
// import Title from './Title';

// function preventDefault(event) {
//   event.preventDefault();
// }

// const useStyles = makeStyles({
//   depositContext: {
//     flex: 1,
//   },
// });

export default function TestTimeline() {
  // const classes = useStyles();
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
      <Typography component="p" variant="subtitle1">
        Time Limit 3:00 Hour
      </Typography>
      
      {/* <div>
        <Link color="primary" href="#" onClick={preventDefault}>
          View balance
        </Link>
      </div> */}
    </React.Fragment>
  );
}