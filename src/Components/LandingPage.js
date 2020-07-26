import React from 'react';
import Button from '@material-ui/core/Button';
import Link from '@material-ui/core/Link';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Avatar from '@material-ui/core/Avatar';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="#">
        Chat App By Root Team
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    
  },
  main: {
    marginTop: theme.spacing(10),
    width: theme.spacing(50),
    height: theme.spacing(60),
    justifyContent: "center"
  },
  buttons:{
    background: 'black',
    borderRadius: 10,
    padding: theme.spacing(2),
    margin: theme.spacing(4),
    width: theme.spacing(40),
    fontFamily: 'Poppins',
    color: 'white',
  },
  avatar: {
    marginLeft: theme.spacing(22),
    backgroundColor: 'balck',
    sizes:'large'
  },
  cardHeader: {
    textAlign: 'center',
    fontWeight: 800,
    fontSize: '30px'
}
}));

export default function LandingPage() {
  const classes = useStyles();
  return (
    <Container component="main" maxWidth="xs" className={classes.container}>
      <div className={classes.root}>
        <Paper elevation={5} className={classes.main} >
          <Box mt={10}>
          <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Box>
        <p className={classes.cardHeader}>Welcome</p>
        </Box>
            <Button variant="contained" className={classes.buttons} >
              Sign UP
              </Button>
            <Button className={classes.buttons}  variant="contained">Log In</Button>
          </Box>
        </Paper>
      </div>
      <Box mt={8}>
        <Copyright />
      </Box>
    </Container>
  );
}

