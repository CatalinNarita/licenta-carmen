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
import AlternateEmailIcon from "@mui/icons-material/AlternateEmail";

const Register = (props) => {
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
          <TextField
            label="Repeat password"
            variant="outlined"
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
