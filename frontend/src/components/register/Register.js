import { useState } from "react";
import {
  Container,
  Paper,
  Box,
  TextField,
  Button,
  InputAdornment,
  Alert,
  Stack,
} from "@mui/material";
import PersonIcon from "@mui/icons-material/Person";
import LockIcon from "@mui/icons-material/Lock";
import { Link, useNavigate } from "react-router-dom";
import AlternateEmailIcon from "@mui/icons-material/AlternateEmail";

const Register = (props) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repeatedPassword, setRepeatedPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handlefirstNameChange = (e) => {
    setFirstName(e.target.value);
  };

  const handleLastNameChange = (e) => {
    setLastName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleRepeatedPasswordChange = (e) => {
    setRepeatedPassword(e.target.value);
  };

  const handleRegister = async () => {
    // if (!password || password !== repeatedPassword) {
    //   return;
    // }

    const res = await fetch("http://localhost:5001/register", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      credentials: "include",
      body: JSON.stringify({
        firstName,
        lastName,
        email,
        password,
        repeatedPassword,
      }),
    });
    if (res.status === 200) {
      setError(null);
      navigate("/dashboard");
    } else {
      const resBody = await res.json();
      setError(resBody.msg);
    }
  };

  return (
    <Container maxWidth="lg">
      <Paper
        elevation={12}
        sx={{
          display: "flex",
          overflow: "hidden",
          borderRadius: "10px",
        }}
      >
        <Box
          sx={{
            flexBasis: "50%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "column",
            gap: 3,
            padding: "3em 1em",
          }}
        >
          <h1
            style={{
              margin: 0,
            }}
          >
            Please register using the form below:
          </h1>
          <TextField
            label="First name"
            variant="outlined"
            style={{
              width: "100%",
            }}
            value={firstName}
            onChange={handlefirstNameChange}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <PersonIcon />
                </InputAdornment>
              ),
            }}
          ></TextField>
          <TextField
            label="Last name"
            variant="outlined"
            style={{
              width: "100%",
            }}
            value={lastName}
            onChange={handleLastNameChange}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <PersonIcon />
                </InputAdornment>
              ),
            }}
          ></TextField>
          <TextField
            label="Email"
            variant="outlined"
            style={{
              width: "100%",
            }}
            value={email}
            onChange={handleEmailChange}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <AlternateEmailIcon />
                </InputAdornment>
              ),
            }}
          ></TextField>
          <TextField
            label="Password"
            variant="outlined"
            type="password"
            style={{
              width: "100%",
            }}
            value={password}
            onChange={handlePasswordChange}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <LockIcon />
                </InputAdornment>
              ),
            }}
          ></TextField>
          <TextField
            label="Repeat password"
            variant="outlined"
            type="password"
            style={{
              width: "100%",
            }}
            value={repeatedPassword}
            onChange={handleRepeatedPasswordChange}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <LockIcon />
                </InputAdornment>
              ),
            }}
          ></TextField>
          {error && (
            <Stack sx={{ width: "100%" }} spacing={2}>
              <Alert severity="error">{error}</Alert>
            </Stack>
          )}
          <Button
            fullWidth
            color="primary"
            variant="contained"
            onClick={handleRegister}
          >
            REGISTER
          </Button>
          <div>
            Already have an account?<Link to="/"> Login Now!</Link>
          </div>
        </Box>
        <Box
          sx={{
            flex: "0 0 50%",
          }}
        >
          <Box
            component="img"
            sx={{
              height: "100%",
              width: "100%",
            }}
            alt="Hotel"
            src="hotel.jpg"
          ></Box>
        </Box>
      </Paper>
    </Container>
  );
};

export default Register;
