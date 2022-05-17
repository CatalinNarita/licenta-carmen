import { useState, useEffect } from "react";
import {
  AppBar,
  Container,
  Toolbar,
  Typography,
  Box,
  Button,
} from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import "./navbar.css";

const pages = [
  { to: "/dashboard", label: "Home" },
  { to: "/bookings", label: "Bookings" },
  { to: "/account", label: "Account" },
  { to: "/contact", label: "Contact" },
];

export const withNavbar = (Component) => {
  const Wrapper = () => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");

    const navigate = useNavigate();

    const firstNameLS = localStorage.getItem("firstName");
    const lastNameLS = localStorage.getItem("lastName");

    useEffect(() => {
      setFirstName(firstNameLS);
      setLastName(lastNameLS);
    }, [firstNameLS, lastNameLS]);

    const handleLogout = async () => {
      try {
        const res = await fetch("http://localhost:5001/logout", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          credentials: "include",
        });
        if (res.status === 200) {
          localStorage.clear();
          navigate("/login");
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
        <AppBar position="static">
          <Container maxWidth="xl">
            <Toolbar disableGutters>
              <HomeIcon sx={{ display: "flex", mr: 1 }} />
              <Typography
                variant="h6"
                noWrap
                component="a"
                href="/dashboard"
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
              <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
                {pages.map((page) => (
                  <Link
                    className="link"
                    key={page.label}
                    to={page.to}
                    sx={{ my: 2, color: "white", display: "block" }}
                  >
                    {page.label}
                  </Link>
                ))}
              </Box>
              <Box sx={{ flexGrow: 0 }}>
                <Typography
                  component="span"
                  sx={{
                    mr: 5,
                  }}
                >
                  Welcome, {firstName} {lastName}!
                </Typography>
                <Button color="inherit" onClick={handleLogout}>
                  Logout
                </Button>
              </Box>
            </Toolbar>
          </Container>
        </AppBar>
        <Component />
      </>
    );
  };

  return <Wrapper />;
};
