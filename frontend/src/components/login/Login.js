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
import { Link, useNavigate, Navigate } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";

const Login = () => {
  const { loading, redirect } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleLogin = async () => {
    try {
      const res = await fetch("http://localhost:5001/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
        body: JSON.stringify({ email, password }),
      });
      if (res.status === 200) {
        setError(null);
        navigate("/dashboard");
      } else {
        const resBody = await res.json();
        setError(resBody.msg);
      }
    } catch (e) {
      console.log(e);
    }
  };

  if (loading) {
    return null;
  }

  return (
    <>
      {(!redirect && <Navigate to="/dashboard" />) || (
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
                Bine ati venit la Pensiunea Lacul Codrilor
              </h1>
              <p
                style={{
                  margin: 0,
                }}
              >
                Logati-va pentru a putea face rezervari
              </p>
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
                      <PersonIcon />
                    </InputAdornment>
                  ),
                }}
              ></TextField>
              <TextField
                label="Parola"
                variant="outlined"
                type="password"
                style={{
                  width: "100%",
                }}
                onChange={handlePasswordChange}
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
                onClick={handleLogin}
              >
                Logare
              </Button>
              <div>
                Nu aveti cont?<Link to="/register"> Inregistrati-va acum!</Link>
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
      )}
    </>
  );
};

export default Login;
