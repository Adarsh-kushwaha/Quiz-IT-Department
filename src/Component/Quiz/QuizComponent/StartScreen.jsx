import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Box } from '@material-ui/core';



const useStyles = makeStyles({
    root: {
        minWidth: 1000,
        padding:"14px",
        backgroundColor:"#dfe2ed"


    },
    bullet: {
        display: 'inline-block',
        margin: '0 2px',
        transform: 'scale(0.8)',
    },
    title: {
        fontSize: 14,
    },
    pos: {
        marginBottom: 12,
    },

    btnGroup: {
        display:"flex",
        alignItem:"center",
        justifyContent:"space-between",
    },
});



const MODAL_STYLE ={
    position:"fixed",
    top:"50%",
    left:"50%",
    transform:"translate(-50%, -50%)",
    backgroundColor:"#fff",
    borderRadius:"5px",
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



export default function StartScreen({open, children}) {
    const classes = useStyles();
    if (!open) return null
    return (
        <>
        <div style={OVERLAY_STYLE}>
        <div style={MODAL_STYLE}>
        <Box display="flex" flex-direction="column" justifyContent="center" alignItems="center" height="60vh" >
            <Card className={classes.root} variant="outlined" >
                <CardContent >

                    <Typography variant="h4" component="h3">
                        <b>{children}</b>
                    </Typography>
                    {/* <ul>
                        <li><Typography className={classes.pos} color="textSecondary">
                            adjective
                        </Typography></li>
                        <li><Typography className={classes.pos} color="textSecondary">
                            adjective
                        </Typography></li>
                        <li><Typography className={classes.pos} color="textSecondary">
                            adjective
                        </Typography></li>
                    </ul> */}


                 </CardContent>
               {/* <CardActions className={classes.btnGroup}>

                    <Button variant="contained" color="secondary" href="http://localhost:3000">
                        Quit Quiz
                    </Button> 
                     <Button variant="contained" color="primary"  onClick={children}>
                        Start Quiz
                    </Button>
                </CardActions> */}
            </Card>
        </Box>
        </div>
        </div>
            
        </>
    )
}

