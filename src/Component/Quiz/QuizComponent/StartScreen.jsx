// import React, {useContext} from 'react';
// import { makeStyles } from '@material-ui/core/styles';
// import Card from '@material-ui/core/Card';
// import CardActions from '@material-ui/core/CardActions';
// import CardContent from '@material-ui/core/CardContent';
// import Button from '@material-ui/core/Button';
// import Typography from '@material-ui/core/Typography';
// import { Box } from '@material-ui/core';
// import { QuizContext } from '../../../Util/Context';



// const useStyles = makeStyles({
//     root: {
//         minWidth: 1000,
//         padding:"14px",
//         backgroundColor:"#dfe2ed"


//     },
//     bullet: {
//         display: 'inline-block',
//         margin: '0 2px',
//         transform: 'scale(0.8)',
//     },
//     title: {
//         fontSize: 14,
//     },
//     pos: {
//         marginBottom: 12,
//     },

//     btnGroup: {
//         display:"flex",
//         alignItem:"center",
//         justifyContent:"space-between",
//     },
// });

// export default function StartScreen() {
//     const classes = useStyles();
//     const {quizState, setQuizState} = useContext(QuizContext);


    

//     return (
//         <Box display="flex" flex-direction="column" justifyContent="center" alignItems="center" height="100vh" >
//             <Card className={classes.root} variant="outlined" >
//                 <CardContent >

//                     <Typography variant="h4" component="h3">
//                         <b>Instructions :</b>
//                     </Typography>
//                     <ul>
//                         <li><Typography className={classes.pos} color="textSecondary">
//                             adjective
//                         </Typography></li>
//                         <li><Typography className={classes.pos} color="textSecondary">
//                             adjective
//                         </Typography></li>
//                         <li><Typography className={classes.pos} color="textSecondary">
//                             adjective
//                         </Typography></li>
//                     </ul>


//                 </CardContent>
//                 <CardActions className={classes.btnGroup}>

//                     <Button variant="contained" color="secondary">
//                         Quit Quiz
//                     </Button>
//                     <Button variant="contained" color="primary" onClick={()=>{setQuizState("quiz")}}>
//                         Start Quiz
//                     </Button>
//                 </CardActions>
//             </Card>
//         </Box>
//     );
// }
