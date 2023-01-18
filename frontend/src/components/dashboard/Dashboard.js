import { Container } from "@mui/material";
import { Box } from "@mui/material";

const Dashboard = () => {
  return (
    <Container maxWidth="xl">
      <h1>Bine ati venit la Pensiunea Lacul Codrilor</h1>
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
          alt="Pensiune"
          src="pensiune.jpg"
        ></Box>
      </Box>
    </Container>
  );
};

export default Dashboard;
