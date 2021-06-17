import React, {useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {Avatar,Button, CssBaseline, Box, TextField, FormControlLabel, Checkbox,Grid, Link, Typography, Container} from "@material-ui/core";
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import AuthBar from "./AuthBar";
import {publicFetch} from "../../Util/Fetch"
// import axiosInstance from '../Axios';
// import { useHistory } from 'react-router-dom';




function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

//Inline styling----------------------------

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(0),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    
   
  },
  avatar: {
    marginTop: theme.spacing(10),
    marginBottom: theme.spacing(1),
    backgroundColor: theme.palette.primary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));



export default function Login() {
    const classes = useStyles();
    const initialFormData = Object.freeze({
		username: '',
		password: '',
	});

	const [formData, updateFormData] = useState(initialFormData);

	const handleChange = (e) => {
		updateFormData({
			...formData,
			[e.target.name]: e.target.value.trim(),
		});
	};

    
 const handleSubmit =(e)=>{
     e.preventDefault();

     const submitCredentials = async credentials =>{
        
        try{
            const {data} = await publicFetch.post('login/', credentials, time)
            console.log(data)
        }catch(err){
           console.log(err)
        }
    }

    submitCredentials();

 }

    
  
  
 
  return (
    
    <>
    <AuthBar/>
    <Container component="main" maxWidth="xs" >
      
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          LogIn 
        </Typography>
        <form className={classes.form} noValidate>
          <TextField
            variant="outlined"
						margin="normal"
						required
						fullWidth
						id="username"
						label="UserName"
						name="username"
						autoComplete="username"
            type="text"
						autoFocus
						onChange={handleChange}
          />
          <TextField
            variant="outlined"
						margin="normal"
						required
						fullWidth
						name="password"
						label="Password"
						type="password"
						id="password"
						autoComplete="current-password"
						onChange={handleChange}
          />
          <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="Remember me"
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            onClick={handleSubmit}
          >
            LogIn
          </Button>
          <Grid container>
            <Grid item xs>
              <Link href="#" variant="body2">
                Forgot password?
              </Link>
            </Grid>
            <Grid item>
              <Link href="#" variant="body2">
                {"Don't have an account? Contact Us"}
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
      <Box mt={8}>
      <Copyright />
      </Box>
    </Container>
    </>
    
  );
}






