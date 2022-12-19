import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import { Paper } from '@mui/material';
import bookcart from '../../Assets/account.png'
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { registerApi } from '../../Services/UserService';
import { useState } from 'react';

const nameRegex = /^[A-Z]{1,}[A-Z a-z]{3,}$/;
const emailRegex =/^[0-9A-Za-z]+([._+-][0-9A-Za-z]+)*[@][0-9A-Za-z]+.[a-zA-Z]{2,3}(.[a-zA-Z]{2,3})?$/;
const passwordRegex =/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;
const mobilRegex = /^[0-9]{10}$/
const theme = createTheme();

export default function SignUp() {
  const [signupObj, setSignupObj] = useState({ FullName: "", EmailId: "", Password: "", MobilNumber: "" });
  const [regexObj, setRegexObj] = useState({
    nameBorder: false,
    emailBorder: false,
    passwordBorder: false,
    phoneBorder: false,
    emailHelper: "",
    passwordHelper: "",
});

const getName = (event) => {
  setSignupObj((previousState) => ({ ...previousState, FullName: event.target.value }));
};
const getEmail = (event) => {
  setSignupObj((previousState) => ({ ...previousState, EmailId: event.target.value }));
};
const getPassword = (event) => {
  setSignupObj((previousState) => ({ ...previousState, Password: event.target.value }));

};
const getMobil = (event) => {
  setSignupObj((previousState) => ({ ...previousState, MobilNumber: event.target.value }));
};

const onSubmit = () => {
  const nameTest = nameRegex.test(signupObj.FullName);
  const emailTest = emailRegex.test(signupObj.EmailId);
  const passwordTest = passwordRegex.test(signupObj.Password);
  const mobilTest = mobilRegex.test(signupObj.MobilNumber);
  console.log(nameTest, mobilTest, emailTest, passwordTest);

  if (!nameTest) {
      setRegexObj((previousState) => ({
          ...previousState,
          nameBorder: true,
          nameHelper: "invalid name",
      }));
  }
  else if (nameTest) {
      setRegexObj((previousState) => ({
          ...previousState,
          nameBorder: false,
          nameHelper: "",
      }));
  }

  if (!mobilTest) {
      setRegexObj((previousState) => ({
          ...previousState,
          mobilBorder: true,
          mobilHelper: "invalid mobil number",
      }));
  }
  else if (mobilTest) {
      setRegexObj((previousState) => ({
          ...previousState,
          mobilBorder: false,
          mobilHelper: "",
      }));
  }

  if (!emailTest) {
      setRegexObj((previousState) => ({
          ...previousState,
          emailBorder: true,
          emailHelper: "invalidemail",
      }));
  }
  else if (emailTest) {
      setRegexObj((previousState) => ({
          ...previousState,
          emailBorder: false,
          emailHelper: "",
      }));
  }

  if (!passwordTest ) {
      setRegexObj((previousState) => ({
          ...previousState,
          passwordBorder: true,
          passwordHelper: "invalid password",
      }));
  }
  else if (passwordTest ) {
      setRegexObj((previousState) => ({
          ...previousState,
          passwordBorder: false,
          passwordHelper: "",
      }));
  }
  if (nameTest  && mobilTest  && emailTest  && passwordTest) {
      registerApi(signupObj).then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      })
  }
};





  return (
    <ThemeProvider theme={theme}>
     <Container component="main"sx={{
            width: 1,
            height:"100%",
            display: 'flex',
            justifyContent: 'center',
            flexDirection: 'row',
            alignItems: 'center',
            backgroundColor: '#f5f5f5',
            position:"relative",
            top:"70px"
          }}>
                <Paper 
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            width: '25vw',
            height: '60vh',
            borderRadius: '10px',
            boxShadow: '0px 0px 6px 1px rgba(0,0,0,0.3)'
          }}
        >

             <img src={bookcart}   margin="normal" style={{ width: "250px", height: "250px", borderRadius: "50%"  }} />
             <Typography component="h5"  variant="h6" 
             style={{  height: "8vh" , display: 'flex', justifyContent: 'center',  alignItems: 'flex-end' }} >ONLINE BOOK SHOPPING    </Typography>

        </Paper>
        <Paper
          sx={{
            height: '73vh',
    width: '30vw',
            // border : '1px solid blue',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            position: 'relative',
            left: '-1%',
            borderRadius: '1px',
            boxShadow: '0px 0px 6px 1px rgba(0,0,0,0.3)'
          }}
        >
         
         <Box  sx={{
            
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-around',
       gap:"50%"
          }}>
          <Typography component="h1" variant="h5">
            LOGIN
          </Typography>
          <Typography component="h1" variant="h5">
            SIGNUP
          </Typography>
          </Box>
          <Box component="form" sx={{ mt: 3, ml:5,mr:5  ,justifyContent: 'flex-start', }}>
            <Grid container spacing={2}>
              <Grid item xs={12} >
                <TextField
                  autoComplete="given-name"
                  name="firstName"
                  required
                  fullWidth
                  id="firstName"
                  label="Full Name"
                  onChange={getName}
                  error={regexObj.nameBorder}
                    helperText={regexObj.nameHelper}
                  autoFocus
                />
              </Grid>
             
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  onChange={getEmail}
                  error={regexObj.emailBorder}
                  helperText={regexObj.emailHelper}
                  autoComplete="email"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  onChange={getPassword}
                  error={regexObj.passwordBorder}
                  helperText={regexObj.passwordHelper}
                  autoComplete="new-password"
                />
              </Grid>
              <Grid item xs={12} >
                <TextField
                  required
                  fullWidth
                  id="lastName"
                  label="Mobil Number"
                  onChange={getMobil}
                  error={regexObj.mobilBorder}
                  helperText={regexObj.mobilHelper}
                  name="lastName"
                  
                  autoComplete="family-name"
                />
              </Grid>
             
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 , backgroundColor: "#A03037"}}
              onClick={onSubmit}
            >
              Sign Up
            </Button>
           
          </Box>
          </Paper>
      </Container>
    </ThemeProvider>
  );
}