// import React, {useContext} from 'react';
// import { makeStyles } from '@material-ui/core/styles';
// import Card from '@material-ui/core/Card';
// import CardContent from '@material-ui/core/CardContent';
// import Button from '@material-ui/core/Button';
// import Typography from '@material-ui/core/Typography';
// import { Box } from '@material-ui/core';
// import { QuizContext } from '../../../Util/Context';
// // import { useParams } from 'react-router'
// // import CollectData from './CollectData';




import React from 'react'

const MODAL_STYLE ={
    position:"fixed",
    top:"50%",
   left:"50%",
    transform:"translate(-50%, -50%)",
    backgroundColor:"#fff",
    padding:"50px",
    zIndex:1000

}

const OVERLAY_STYLE={
    position:"fixed",
    top:0,
    bottom:0,
    left:0,
    right:0,
    backgroundColor:"rgba(0,0,0,0.7)",
    zIndex:1000
}



export default function EndScreen({open, children}) {
    if (!open) return null
    return (
        <>
        <div style={OVERLAY_STYLE}>
        <div style={MODAL_STYLE}>
            {children}
        </div>
        </div>
            
        </>
    )
}














// const useStyles = makeStyles({
//     root: {
//         minWidth: 700,
//         padding:"14px",
//         backgroundColor:"#dfe2ed",
        


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

//     inItems: {
//         display:"flex",
//         flexDirection:"column",
//         alignItems:"center",
//         justifyContent:"center",
//         width:"400"
//     },
// });

// export default function EndScreen() {
//     const classes = useStyles();
//      const {score} = useContext(QuizContext)
//     //  const { id } = useParams();

//     //  const API_URL = "http://52.172.164.179:8090/test/" + id;
//     //  const [dataState] = CollectData(API_URL)

//     return (
        
//         <Box display="flex" flex-direction="column" justifyContent="center" alignItems="center" height="100vh" >
//             <Card className={classes.root} variant="outlined" >
//                 <CardContent className={classes.inItems} >

//                     <Typography variant="h4" component="h3">
//                         <b>Your Result </b>
//                     </Typography>
//                     <Typography variant="subtitle1" component="h3">
//                         <b>{score}</b>
//                     </Typography>
//                     <Typography variant="subtitle1" component="h3">
//                         <b>Performance </b>
//                     </Typography>
//                     <Typography variant="" component="">
//                         <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et, vel dolor! Animi 
//                         </p>
//                     </Typography>
//                     <Button variant="contained" color="primary">
//                         Back To Dashboard
//                     </Button>


//                 </CardContent>
               
//             </Card>
//         </Box>
//     );
// }