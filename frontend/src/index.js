import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createTheme, ThemeProvider } from "@mui/material";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./components/login/Login";
import Register from "./components/register/Register";
import Dashboard from "./components/dashboard/Dashboard";
import Bookings from "./components/bookings/Bookings";
import { withNavbar } from "./hoc/withNavbar";
import { Rooms } from "./components/rooms/Rooms";

const theme = createTheme({});

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/dashboard" element={withNavbar(Dashboard)} />
          <Route path="/rooms" element={withNavbar(Rooms)} />
          <Route path="/bookings" element={withNavbar(Bookings)} />
        </Routes>
      </Router>
    </ThemeProvider>
  </React.StrictMode>
);
