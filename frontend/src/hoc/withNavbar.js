import { useAuth } from "../hooks/useAuth";
import {
  AppBar,
  Container,
  Toolbar,
  Typography,
  Box,
  Button,
} from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import { NavLink } from "react-router-dom";
import { useNavigate, Navigate } from "react-router-dom";
import "./navbar.css";

const pages = [
  { to: "/dashboard", label: "Home" },
  { to: "/rooms", label: "Rooms" },
  { to: "/bookings", label: "Bookings" },
  { to: "/account", label: "Account" },
  { to: "/contact", label: "Contact" },
];

export const withNavbar = (Component) => {
  const Wrapper = () => {
    const { loading, redirect, firstName, lastName } = useAuth();

    const navigate = useNavigate();

    const handleLogout = async () => {
      try {
        const res = await fetch("http://localhost:5001/logout", {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
          },
          credentials: "include",
        });
        if (res.status === 200) {
          //fara eroare
          navigate("/");
        } else {
          const resBody = await res.json();
          console.log(resBody.error);
        }
      } catch (e) {
        console.log(e);
      }
    };

    return (
      <>
        <AppBar position="sticky">
          <Container maxWidth="xl">
            <Toolbar disableGutters>
              <HomeIcon sx={{ display: "flex", mr: 1 }} />
              <Typography
                variant="h6"
                noWrap
                component="a"
                href="/"
                sx={{
                  mr: 2,
                  display: { xs: "none", md: "flex" },
                  fontFamily: "monospace",
                  fontWeight: 700,
                  letterSpacing: ".3rem",
                  color: "inherit",
                  textDecoration: "none",
                }}
              >
                LOGO
              </Typography>
              <Box
                sx={{
                  flexGrow: 1,
                  display: { xs: "none", md: "flex" },
                  minHeight: "inherit",
                }}
              >
                {pages.map((page) => (
                  <NavLink
                    className="link"
                    style={({ isActive }) => {
                      return isActive
                        ? { backgroundColor: "rgba(255,255,255, 0.4)" }
                        : undefined;
                    }}
                    key={page.label}
                    to={page.to}
                  >
                    {page.label}
                  </NavLink>
                ))}
              </Box>
              <Box sx={{ flexGrow: 0 }}>
                <Typography
                  component="span"
                  sx={{
                    mr: 5,
                  }}
                >
                  Bine ai venit, {firstName} {lastName}!
                </Typography>
                <Button color="inherit" onClick={handleLogout}>
                  Logout
                </Button>
              </Box>
            </Toolbar>
          </Container>
        </AppBar>
        {loading ? null : redirect ? <Navigate to="/" /> : <Component />}
      </>
    );
  };

  return <Wrapper />;
};
