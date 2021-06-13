import React from 'react';
import clsx from 'clsx';
import {CssBaseline, Drawer, Box, AppBar, Toolbar, List, Typography, Divider, IconButton, Container, Grid, Paper, Link } from "@material-ui/core"
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import AccountCircleRoundedIcon from '@material-ui/icons/AccountCircleRounded';
import { mainListItems, secondaryListItems } from './ListItems';
// import Chart from './Chart';
// import Deposits from './Deposits';
// import Orders from './Orders';
import useStyles from './Styles';
import {ThemeProvider, createMuiTheme} from "@material-ui/core/styles"

//Footer Of Website

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="">
        Quiz
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const Dashboard = () => {
  const classes = useStyles();

  const theme = createMuiTheme({
      palette:{
          type: "light",
      }
  })

  const [open, setOpen] = React.useState(true);
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
          <div style={{display: 'flex', alignItems: 'center', flexWrap: 'wrap',}}>
        <AccountCircleRoundedIcon />
        <span><p style={{fontSize:'16px', paddingInline:'8px'}}> Enrollment Number </p></span>
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
        <ThemeProvider theme = {theme}>
        <Paper>
        <Container maxWidth="lg" className={classes.container}>
          <Grid container spacing={3}>
            {/* Chart */}
            <Grid item xs={12} md={8} lg={9}>
              <Paper className={fixedHeightPaper}>
                {/* <Chart /> */}
              </Paper>
            </Grid>
            {/* Recent Deposits */}
            <Grid item xs={12} md={4} lg={3}>
              <Paper className={fixedHeightPaper}>
                {/* <Deposits /> */}
              </Paper>
            </Grid>
            {/* Recent Orders */}
            <Grid item xs={12}>
              <Paper className={classes.paper}>
                {/* <Orders /> */}
              </Paper>
            </Grid>
          </Grid>
          <Box pt={4}>
            <Copyright />
          </Box>
        </Container>
        </Paper>
        </ThemeProvider>
      </main>
    </div>
  );
}
export default Dashboard;