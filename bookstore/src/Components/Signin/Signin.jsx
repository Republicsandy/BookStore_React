import * as React from 'react';
import { useState } from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import {  Paper } from '@mui/material';
// import {useNavigate} from 'react-router-dom'
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import bookcart from '../../Assets/account.png'
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { loginApi } from '../../Services/UserService';

const emailRegex =
    /^[0-9A-Za-z]+([._+-][0-9A-Za-z]+)*[@][0-9A-Za-z]+.[a-zA-Z]{2,3}(.[a-zA-Z]{2,3})?$/;
const passwordRegex =
    /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;

const theme = createTheme();

export default function SignIn() {
  // const navigate = useNavigate()
    const [signinObj, setSigninObj] = useState({ EmailId: "", Password: "" });
    const [regexObj, setRegexObj] = useState({
        emailBorder: false,
        passwordBorder: false,
        emailHelper: "",
        passwordHelper: "",
    });
    const takeUserName = (event) => {
      setSigninObj((previousState) => ({ ...previousState, EmailId: event.target.value }));
  };
  const takePassword = (event) => {
    setSigninObj((previousState) => ({ ...previousState, Password: event.target.value }));
};
console.log(signinObj,"sign in object");

const onSubmit = () => {
  const emailTest = emailRegex.test(signinObj.EmailID);
  const passwordTest = passwordRegex.test(signinObj.Password);
  console.log(emailTest, passwordTest);

  if (!emailTest) {
      setRegexObj((previousState) => ({
          ...previousState,
          emailBorder: true,
          emailHelper: " Invalid email",
      }));
  }
  else if (emailTest) {
      setRegexObj((previousState) => ({
          ...previousState,
          emailBorder: false,
          emailHelper: "",
      }));
  }

  if (!passwordTest) {
      setRegexObj((previousState) => ({
          ...previousState,
          passwordBorder: true,
          passwordHelper: "Invalid password",
      }));
  }
  else if (passwordTest ) {
      setRegexObj((previousState) => ({
          ...previousState,
          passwordBorder: false,
          passwordHelper: "",
      }));
  }
  if (emailTest && passwordTest ) {
    loginApi(signinObj).then((response) => {
      console.log(response);
      console.log("login success")
      localStorage.setItem("token", response.data.data)
      console.log(localStorage);
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
             <Paper spacing={2}
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
          <Box component="form"  noValidate sx={{ mt: 3, ml:5,mr:5 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              onChange={takeUserName}
              error={regexObj.emailBorder}
              helperText={regexObj.emailHelper}
              autoComplete="email"
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              onChange={takePassword}
              error={regexObj.passwordBorder}
              helperText={regexObj.passwordHelper}
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2, backgroundColor: "#A03037"}}
              onClick={onSubmit}
            >
              Sign In
            </Button>
            <Typography component="h1" variant="h5">
            OR
          </Typography>
          <Box  sx={{
            
            display: 'flex',
            flexDirection: 'row',
            gap:"20%"
          }}>
          <Button
              type="submit"
              fullWidth
              id='facebook'
              variant="contained"
              sx={{ mt: 3, mb: 2,}}
            >
              Facebook
            </Button>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2, backgroundColor: "#F5F5F5", borderColor: "#E4E4E4", color: "black"}}>
              Google
            </Button>
            </Box>
          </Box>
        </Paper>
      </Container>
    </ThemeProvider>
  );
}
