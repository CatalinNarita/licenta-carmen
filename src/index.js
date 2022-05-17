import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createTheme, ThemeProvider } from "@mui/material";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./client/components/login/Login";
import Register from "./client/components/register/Register";
import Dashboard from "./client/components/dashboard/Dashboard";
import { withNavbar } from "./client/hoc/withNavbar";

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
        </Routes>
      </Router>
    </ThemeProvider>
  </React.StrictMode>
);
