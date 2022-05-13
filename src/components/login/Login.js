import {
  Container,
  Paper,
  Box,
  TextField,
  Button,
  InputAdornment,
} from "@mui/material";
import PersonIcon from "@mui/icons-material/Person";
import LockIcon from "@mui/icons-material/Lock";
import { Link } from "react-router-dom";

const Login = (props) => {
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
            Welcome to Hotel X
          </h1>
          <p
            style={{
              margin: 0,
            }}
          >
            Login to start your booking experience!
          </p>
          <TextField
            label="Email"
            variant="outlined"
            style={{
              width: "100%",
            }}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <PersonIcon />
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
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <LockIcon />
                </InputAdornment>
              ),
            }}
          ></TextField>
          <Button fullWidth color="primary" variant="contained">
            SIGN IN
          </Button>
          <div>
            Don't have an account?<Link to="/register"> Sign UP Now</Link>
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

export default Login;
