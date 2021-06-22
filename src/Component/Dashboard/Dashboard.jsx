import React from 'react';
import clsx from 'clsx';
import { CssBaseline, Drawer, Box, AppBar, Toolbar, List, Typography, Divider, IconButton, Container, Grid, Paper } from "@material-ui/core"
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import AccountCircleRoundedIcon from '@material-ui/icons/AccountCircleRounded';
import { mainListItems, secondaryListItems } from './ListItems';
import { Button } from '@material-ui/core';
import useStyles from './Styles';
import { ThemeProvider, createMuiTheme } from "@material-ui/core/styles";

import { getUsername } from '../../Util/Common';
import CollectData from '../Quiz/CollectData';
//Footer Of Website

// function Copyright() {
//   return (
//     <Typography variant="body2" color="textSecondary" align="center">
//       {'Copyright © '}
//       <Link color="inherit" href="">
//         Quiz
//       </Link>{' '}
//       {new Date().getFullYear()}
//       {'.'}
//     </Typography>
//   );
// }

const Dashboard = () => {

  
  const Link = "http://localhost:3000/test/"
  const API_URL = "http://52.172.164.179:8090/test/?archived=false"
  const [dataState] = CollectData(API_URL)
  console.log(dataState)
  const user = getUsername();
  const classes = useStyles();

  const theme = createMuiTheme({
    palette: {
      type: "light",
    }
  })

  const [open, setOpen] = React.useState(false);
  const handleDrawerOpen = () => {
    setOpen(true);
  };
  const handleDrawerClose = () => {
    setOpen(false);
  };
  const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);

  return (
    <div className={classes.root}>
      <CssBaseline />

      <AppBar position="absolute" className={clsx(classes.appBar, open && classes.appBarShift)}>
        <Toolbar className={classes.toolbar}>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            className={clsx(classes.menuButton, open && classes.menuButtonHidden)}
          >
            <MenuIcon />
          </IconButton>
          <Typography component="h1" variant="h6" color="inherit" noWrap className={classes.title}>
            This Site Is Under Development So Be Patient
          </Typography>
          <IconButton color="inherit" size="medium">
            <div style={{ display: 'flex', alignItems: 'center', flexWrap: 'wrap', }}>
              <AccountCircleRoundedIcon />
              <span><p style={{ fontSize: '16px', paddingInline: '8px' }}> {user} </p></span>
            </div>
          </IconButton>

        </Toolbar>
      </AppBar>

      <Drawer
        variant="permanent"
        classes={{
          paper: clsx(classes.drawerPaper, !open && classes.drawerPaperClose),
        }}
        open={open}
      >
        <div className={classes.toolbarIcon}>
          <IconButton onClick={handleDrawerClose}>
            <ChevronLeftIcon />
          </IconButton>
        </div>
        <Divider />
        <List >{mainListItems}</List>
        {/* <Divider /> */}
        <List>{secondaryListItems}</List>
      </Drawer>
      <main className={classes.content}>
        <div className={classes.appBarSpacer} />
        <ThemeProvider theme={theme}>
          <Paper>
            <Container maxWidth="lg" className={classes.container}>
              <Grid container spacing={2}>
                {dataState.data.map((q) => (

                  <Grid item key={q.title} xs={12} md={6} lg={4}>
                    <Paper className={fixedHeightPaper}>
                      <Typography component="h2" variant="h6" color="primary" gutterBottom>
                        {q.title}
                      </Typography>
                      <Typography component="p" variant="subtitle1">
                        Quiz Starting Time : {q.starting_time}
                      </Typography>
                      <Typography component="p" variant="subtitle1">
                        Quiz Ending Time : {q.ending_time}
                      </Typography>
                      <Typography component="p" variant="subtitle1">
                        No Of Question : {q.questions.length}
                      </Typography>
                      <div>
                        <Button className={classes.attemptBtn} variant="contained" color="primary" href={Link + q.id}>
                          Attempt Now
                        </Button></div>
                    </Paper>
                  </Grid>




                ))}
                {/* <Grid item xs={12} md={4} lg={4}>
                  <Paper className={fixedHeightPaper}>
                    
                  </Paper>
                </Grid> */}
                {/* Quiz 2 */}
                {/* <Grid item xs={12} md={4} lg={4}>
                  <Paper className={fixedHeightPaper}>
                   
                  </Paper>
                </Grid> */}
                {/* Quiz 3 */}
                {/* <Grid item xs={12} md={4} lg={4}>
                  <Paper className={fixedHeightPaper}>
                
                  </Paper>
                </Grid> */}
                {/* Recent Quiz */}
                {/* <Grid item xs={12} md={6} lg={6} className={classes.recentQuiz} >
                  <Paper className={classes.paper}>
                  
                  </Paper>
                </Grid> */}
              </Grid>
              {/* <Box pt={4}>
               
              </Box> */}
            </Container>
          </Paper>
        </ThemeProvider>
      </main>
    </div >
  );
}
export default Dashboard;