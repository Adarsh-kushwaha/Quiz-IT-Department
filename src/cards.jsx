
import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import {
  Grid,
  Card,
  CardContent,
  Typography,
  CardHeader,
} from "@material-ui/core/";
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({

   
      card: {
        maxWidth: 300,
        margin: "auto",
        transition: "0.3s",
        backgroundColor:"#757575",
        border:"none"
      },
      paper: {
        textAlign: 'center',
        whiteSpace: 'nowrap',
        marginBottom: theme.spacing(2),
        backgroundColor:'#757575'
      }
}));

export default function AltCard() {
  const classes = useStyles();
  const data = [
    { quarter: 1, earnings: 13000 },
    { quarter: 2, earnings: 16500 },
    { quarter: 3, earnings: 14250 },
  ];
  return (
   
      <Grid
        container
        spacing={2}
        direction="row"
        justify="center"
        alignItems="center" >
       
        {data.map((elem) => (
          <Grid item xs={12} sm={6} md={3} key={data.indexOf(elem)}>
            <Card className={classes.card}>
              <CardHeader
                title={`quarter : ${elem.quarter}`}
                subheader={`earnings : ${elem.earnings}`}
              />
              <CardContent>
                <Typography variant="h5" gutterBottom>
                  Hello World
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
        <Grid item xs={8}>
          {" "}
          <Paper className={classes.paper}>
             <Card className={classes.card}>
              <CardHeader title={"chhaya"} subheader={"bisen"} />{" "}
              <CardContent>
                <Typography variant="h5" gutterBottom>
                  Hello World{" "}
                  
     
                </Typography>{" "}
                <Button variant="contained" color="primary">
        Primary
      </Button>
              </CardContent>{" "}
            </Card>
          </Paper>
        </Grid>
        </Grid>
    
    
  );
}
