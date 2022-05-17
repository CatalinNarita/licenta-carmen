import { useAuth } from "../../hooks/useAuth";
import { Navigate } from "react-router-dom";
import { Container } from "@mui/material";

const Dashboard = () => {
  const { loading, redirect } = useAuth();

  if (loading) {
    return null;
  }
  if (redirect) {
    return <Navigate to="/" />;
  }
  return (
    <Container maxWidth="xl">
      <div>Welcome!</div>
    </Container>
  );
};

export default Dashboard;
