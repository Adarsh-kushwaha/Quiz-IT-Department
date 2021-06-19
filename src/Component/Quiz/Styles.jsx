import { makeStyles } from '@material-ui/core/styles';
const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing(3),
      
      color: theme.palette.text.secondary,
    },

    quizContainer:{
        marginTop:"34px",
        padding:"34px",
    },

    optionPaper:{
      padding: theme.spacing(1)
      
    },
    quizBtn:{
      margin:theme.spacing(1),
      marginTop:"24px"
    }
  }));

  export default useStyles;