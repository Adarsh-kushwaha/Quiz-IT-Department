import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button'


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    margin:"0px",
    
    
    
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
btnTitle:{
  textTransform:'Capitalize',
  color:'black',
  
}

}));

export default function QuizHeader(props) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static" >
        <Toolbar>
          <Typography variant="h4" className={classes.title}>
            {props.title}
          </Typography>
          <Button variant="contained"  className={classes.btnTitle}>Time Left : 15:00 min</Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}
